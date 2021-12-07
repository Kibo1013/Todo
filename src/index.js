import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = inputText;
  div.appendChild(p);
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //
    const completeTarget = completeButton.parentNode.parentNode;
    document.getElementById("imcomplete-list").removeChild(completeTarget);
    const completeText = completeTarget.childNodes[0].firstChild.innerText;
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList = "list-row";
    const p = document.createElement("p");
    p.innerText = completeText;
    const button = document.createElement("button");
    button.innerText = "戻す";
    button.addEventListener("click", () => {
      // const backTarget =
      alert("戻す");
    });
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(button);
    document.getElementById("complete-list").appendChild(li);
  });
  div.appendChild(completeButton);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });
  div.appendChild(deleteButton);
  const li = document.createElement("li");
  li.appendChild(div);
  document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
