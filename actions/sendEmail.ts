"use server";
export const getData = async (formdata: FormData) => {
  console.log(formdata.get("senderEmail"));
  console.log(formdata.get("description"));
};
