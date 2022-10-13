
const tasks = [
  {
    checked: true,
    text: 'Access our platform and answer questions to revise on your studies'
  },
];

const thead = ["Student Name", "Country", "City", "Admission Number"];
const tbody = [
  {
    className: "table-success",
    data: ["Faith Mutheo", "Kenya", "Nairobi", "R23"]
  },
  {
    className: "",
    data: ["JUlliet Nakayiza", "Uganda", "Lira", "A84"]
  },
  {
    className: "table-info",
    data: ["Esther Nalenyi Adaobi", "Nigeria", "Abuja", "q34"]
  },
  {
    className: "",
    data: ["Mercy Chepchirchir", "Rwanda", "KIgali", "u76"]
  },
  {
    className: "table-danger",
    data: ["Respah Nafula", "Malawi", "Feldkirchen in Kärnten", "a65"]
  },
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };
