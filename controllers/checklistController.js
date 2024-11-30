const rules = require("../config/rules");
const { fetchData } = require("../services/apiService");

const evaluateChecklist = async () => {
  const data = await fetchData();
  return rules.map((rule) => ({
    id: rule.id,
    description: rule.description,
    status: rule.check(data) ? "Passed" : "Failed",
  }));
};

module.exports = { evaluateChecklist };
