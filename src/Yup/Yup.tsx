import * as yup from "yup";

interface FormData {
  username: string;
  email: string;
  dob: string;
  sex: "Male" | "Female";
  mobile: string;
  govtId: "adhaar" | "pan";
  govtIdNumber: string;
}

export const validationSchema = yup.object({
  username: yup.string().required().min(3),

  email: yup.string().email().required(),
  dob: yup.string().required().matches(/^\d+$/, "Invalid age"),
  sex: yup.string().required().oneOf(["Male", "Female"]),
  mobile: yup.string().required().matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  govtId: yup.string().required().oneOf(["adhaar", "pan"]),
  govtIdNumber: yup.string().when('govtId', {
    is: (govtId: string) => govtId === 'adhaar',
    then: yup.string().required().matches(/^[2-9]\d{11}$/, "Invalid Aadhaar number"),
    otherwise: yup.string().required().matches(/^[A-Za-z0-9]{10}$/, "Invalid PAN number")
  }),
});


