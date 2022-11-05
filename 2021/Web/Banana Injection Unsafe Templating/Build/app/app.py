#!/usr/bin/env python
from flask import Flask, request, render_template_string, render_template
import redis, time


app = Flask(__name__,template_folder="templates")
app.config['APP_FOLDER'] = "/app/"
app.config['STATIC_FOLDER'] =  app.config['APP_FOLDER'] + "static/"
app.config['FLAG'] = "ZiTF{7a4be697c26c94b9e8b70afbadd0fe61}"

r = redis.Redis(host='redis.zitf.fr') # Will store all the payloads and allow rate limiting

#Add Template injection exploit
@app.route("/")
def root():
    return hello_ssti()

@app.route('/hello')
def hello_ssti():
    template = render_template("index.html", name=request.args.get('name'))
    return render_template_string(template) #extra render that makes the page vulnerable to SSTI

@app.route('/report',methods=['POST', 'GET'])
def report():
    if request.method == 'POST':
        if request.form['url']:
            cur_time = time.time()
            last_time = r.get('time.'+ request.remote_addr) 
            last_time = float(last_time) if last_time is not None else 0
            
            time_diff = cur_time - last_time

            if time_diff < 10:
                return render_template("report.html", response="Vous ne pouvez soumettre une URL qu'une fois toutes les dix secondes !")
            r.rpush('payloads', request.form['url'])
            r.setex('time.' + request.remote_addr, 60, cur_time) 
            response = """Votre message a bien été pris en compte ! 
            Notre administrateur consultera la page présentant une erreur et vous fera un retour sous peu."""
        else :
            response = """Entrez une URL !"""
        return render_template("report.html", response=response)
    if request.method == 'GET':
        return render_template("report.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)