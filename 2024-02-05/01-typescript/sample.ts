export type Student = {
  name: string;
  gender?: "male" | "female";
};

export const 학생1: Student = { name: "고지명" };

export type StudentWithGender = Required<Student>;

export const 학생2: StudentWithGender = { name: "고현아", gender: "female" };

export type StudentWithOnlyName = Omit<Student, "gender">;
