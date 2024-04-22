export default function createIteratorOject(report) {
  const newArray = [];
  for (const element of Object.values(report.allEmployees)) {
    newArray.push(...element);
  }
  return newArray;
}
