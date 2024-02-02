const immer = require("immer");

const 남자1 = {
  name: "배성재",
  age: 28,
  hobbies: [
    {
      name: "코딩",
      since: "2023-10-01",
      stories: [
        {
          date: "2023-10-01",
          content: "",
          images: [
            { id: "1", src: "/photo1.png" },
            { id: "2", src: "/photo2.png" },
          ],
        },
        {
          date: "2023-12-25",
          content: "",
          images: [{ id: "3", src: "/photo3.png" }],
        },
        {
          date: "2024-02-02",
          content: "",
          images: [{ id: "4", src: "/photo4.png" }],
        },
      ],
    },
    {
      name: "운동",
      since: "2024-02-02",
      stories: [
        { date: "2024-02-02", content: "", images: [{ id: "", src: "" }] },
      ],
    },
  ],
};

// 기존 객체의 내용 변경하지 않고, 내용이 달라진 새로운 객체를 가질 수 있어야 함.

// 기존 객체의 내용을 변경해 버리는 방법
// console.log("과거의 남자", 남자1);
남자1.hobbies
  .find((hobby) => hobby.name === "코딩")
  .stories.find((story) => story.date === "2023-10-01")
  .images.push({ id: "111", src: "/photo111.png" });
// console.log("지금의 남자", 남자1);

// 기존 객체의 내용을 변경하지 않는 방법 1
const newStories = [];
const 새로운남자 = {
  ...남자1,
  hobbies: 남자1.hobbies.map((hobby) =>
    hobby.name !== "코딩"
      ? hobby
      : { ...hobby, stories: [...hobby.stories, newStor] }
  ),
};

// 기존 객체의 내용을 변경하지 않는 방법 2
// const 새로운남자 = immer.produce(남자1, (draft) => {
//   draft.hobbies
//     .find((hobby) => hobby.name === "코딩")
//     .stories.find((story) => story.date === "2023-10-01")
//     .images.push({ id: "111", src: "/photo111.png" });
// });
// console.log(남자1 === 새로운남자);
