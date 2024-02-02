let go = true

export default function createRecords(records) {
  records.sort((a, b) => a.time - b.time)
  if (records.length > 5) {
    records.pop()
  }
  if (go) {
    go = false
    const aside = document.querySelector(".aside")
    aside.style.display = "block"
  }
  const tbody = document.querySelector("tbody")
  tbody.innerHTML = `
     ${records
       .map((record) => {
         const value = record.time
         const minutes =
           Math.floor(value / 60) >= 10
             ? Math.floor(value / 60)
             : "0" + Math.floor(value / 60)
         const seconds = value % 60 >= 10 ? value % 60 : "0" + (value % 60)
         return `<tr><td>${record.name}</td><td>${minutes}:${seconds}</td><td>${record.level.split(" ")[2]}</td></tr>`
       })
       .join("")}
      `
  localStorage.setItem("records", JSON.stringify(records))
}
