import groq from "groq";

export const foundersQuery = groq`
  *[_type == "ourfounders"] | order(order) {
    _id,
    title,
    type,
    image,
    content,
    list,
    facebook,
    twitter,
    linkedin,
    email
  }
`;
