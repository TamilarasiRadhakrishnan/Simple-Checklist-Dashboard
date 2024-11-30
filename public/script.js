document.addEventListener("DOMContentLoaded", async () => {
    const checklistContainer = document.getElementById("checklist");
  
    try {
      const response = await fetch("/api/checklist");
      const results = await response.json();
  
      results.forEach((rule) => {
        const ruleElement = document.createElement("div");
        ruleElement.className = `rule ${rule.status.toLowerCase()}`;
        ruleElement.textContent = `${rule.description}: ${rule.status}`;
        checklistContainer.appendChild(ruleElement);
      });
    } catch (error) {
      console.error("Error fetching checklist results:", error);
      checklistContainer.textContent = "Failed to load checklist results.";
    }
  });
  