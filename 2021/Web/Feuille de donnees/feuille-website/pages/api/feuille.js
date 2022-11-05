import axios from "axios";

export async function getAllMembers() {
  return await axios.get(`${process.env.NEXT_PUBLIC_CONTAINER}/team`).then(res => res.data).catch(_e => null)
}

export async function getAllComments() {
  return await axios.get(`${process.env.NEXT_PUBLIC_CONTAINER}/comments`).then(res => res.data).catch(_e => null)
}

export async function getAllServices() {
  return await axios.get(`${process.env.NEXT_PUBLIC_CONTAINER}/services`).then(res => res.data).catch(_e => null)
}


export async function getMember(name) {
  return await axios.get(`http://139.59.198.141:3333/team/${name}`).then(res => res.data).catch(_e => null)
}
