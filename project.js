let complaints = [];

// button references
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const tableBody = document.getElementById("complaintTable");

// submit event
submitBtn.addEventListener("click", addComplaint);
resetBtn.addEventListener("click", resetComplaints);

function addComplaint() {
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const dept = document.getElementById("dept").value.trim();
    const category = document.getElementById("category").value;
    const issue = document.getElementById("issue").value.trim();

    if (!name || !roll  ||!dept || !category || !issue) {
        alert("Please fill all fields");
        return;
    }

    const complaint = {
        name,
        roll,
        dept,
        category,
        issue,
        status: "Pending"
    };

    complaints.push(complaint);
    displayComplaints();
    clearInputs();
}

function displayComplaints() {
    tableBody.innerHTML = "";

    complaints.forEach((c, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${c.name}</td>
            <td>${c.roll}</td>
            <td>${c.dept}</td>
            <td>${c.category}</td>
            <td>${c.issue}</td>
            <td>${c.status}</td>
            <td>
                <button onclick="resolveComplaint(${index})">
                    Resolve
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function resolveComplaint(index) {
    complaints[index].status = "Resolved";
    displayComplaints();
}

function resetComplaints() {
    if (confirm("Delete all complaints?")) {
        complaints = [];
        displayComplaints();
    }
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("category").value = "";
    document.getElementById("issue").value = "";
}
