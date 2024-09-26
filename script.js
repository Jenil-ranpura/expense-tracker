let text = document.querySelector(".text");
let number = document.querySelector(".number");
let op1 = document.querySelector(".one");
let op2 = document.querySelector(".two");
let date = document.querySelector(".date");
let btn = document.querySelector(".add");
let thead = document.querySelector("thead");
let num = 1;
let bill = 0;

btn.addEventListener("click", () => {
    if(text.value == "" || number.value == "" || op1.value == "Select Catagory" || op2.value == "Catagory(income & outgoing)") {
        alert("You Give Some Invalid Input");
    }else{
        let ntr = document.createElement("tr");
        ntr.classList.add("new");
        let thName = document.createElement("th");
        thName.innerText = text.value;

        let thNo = document.createElement("th");
        thNo.innerText = num;
        num++;

        let thAmount = document.createElement("th");
        thAmount.innerText = number.value;

        let thCatagory = document.createElement("th");
        if(op1.value == "Select Catagory") {
            alert("catagory input is invalid");
        }else{
            thCatagory.innerText = op1.value;
        }

        let thDate = document.createElement("th");
        thDate.innerText = date.value;

        let thDel = document.createElement("th");
        thDel.classList.add("btn");
        thDel.innerHTML = "<button>Delete</button>";

        thDel.addEventListener("click", () => {
            ntr.remove();
        })

        let total = parseInt(number.value);
        if(op2.value == "Income") {
            bill = bill + total;
        }else if(op2.value == "Outcome") {
            bill = bill - total;
        }

        let thTotal = document.createElement("th");
        thTotal.innerText = bill;

        let thIn = document.createElement("th");
        thIn.innerText = op2.value;

        text.value = "";
        number.value = "";
        op1.value = "Select Catagory";
        op2.value = "Catagory(income & outgoing)";

        ntr.appendChild(thNo);
        ntr.appendChild(thDate);
        ntr.appendChild(thName);
        ntr.appendChild(thCatagory);
        ntr.appendChild(thIn);
        ntr.appendChild(thAmount);
        ntr.appendChild(thTotal);
        ntr.appendChild(thDel);
        thead.appendChild(ntr);
    }
})

