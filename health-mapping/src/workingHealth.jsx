import { useState } from "react";
import { newHealthQuestions } from "./HealthQuestions";

const HealthForm = () => {
  const [checkboxStates, setCheckboxStates] = useState(
    newHealthQuestions.map(() => ({ checked: false, date: "" }))
  );

  const familyData = {
    self: true,
    spouse: true,
    son: true,
    daughter: false,
    father: false,
    mother: false,
    fatherInLaw: false,
    motherInLaw: false,
    sonCount: 2,
    daughterCount: 1,
  };

  const handleCheckboxChange = (index) => {
    setCheckboxStates((prevCheckboxStates) => {
      const updatedCheckboxStates = [...prevCheckboxStates];
      updatedCheckboxStates[index] = {
        ...updatedCheckboxStates[index],
        checked: !updatedCheckboxStates[index].checked,
      };
      return updatedCheckboxStates;
    });
  };

  const handleDateInputChange = (index, value) => {
    console.log(value);
    setCheckboxStates((prevCheckboxStates) => {
      const updatedCheckboxStates = [...prevCheckboxStates];
      updatedCheckboxStates[index] = {
        ...updatedCheckboxStates[index],
        date: value,
      };
      console.log(updatedCheckboxStates);
      return updatedCheckboxStates;
    });
  };

  const formatMonthInput = (monthInputValue) => {
    const [year, month] = monthInputValue.split("-");
    const isValidDate = year && month && month?.length === 2;
    return isValidDate ? `${month}/${year}` : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataForAPI = [];
    newHealthQuestions.forEach((question, index) => {
      const questionSetCd = question.question;
      const questionCd = question.qcd;
      const isChecked = checkboxStates[index].checked;
      const sinceQuestion = question.sinceQuestion;
      const response = isChecked ? "YES" : "NO";
      const date = formatMonthInput(checkboxStates[index].date);
      console.log(date);
      dataForAPI.push({
        questionSetCd: questionSetCd,
        questionCd: questionCd,
        response: response,
      });
      dataForAPI.push({
        questionSetCd: questionSetCd,
        questionCd: sinceQuestion,
        response: date,
      });
    });
    console.log(dataForAPI);
  };

  const renderAccordians = () => {
    const accordians = [];
    if (familyData.self) {
      accordians.push(renderAccordian("Self"));
    }
    if (familyData.spouse) {
      accordians.push(renderAccordian("Spouse"));
    }
    if (familyData.father) {
      accordians.push(renderAccordian("Father"));
    }
    if (familyData.mother) {
      accordians.push(renderAccordian("Mother"));
    }
    if (familyData.fatherInLaw) {
      accordians.push(renderAccordian("Father-in-law"));
    }
    if (familyData.motherInLaw) {
      accordians.push(renderAccordian("Mother-in-law"));
    }
    if (familyData.son && familyData.sonCount >= 1) {
      for (let i = 1; i <= familyData.sonCount; i++) {
        accordians.push(renderAccordian(`Son ${i}`));
      }
    }
    if (familyData.daughter && familyData.daughterCount >= 1) {
      for (let i = 1; i <= familyData.daughterCount; i++) {
        accordians.push(renderAccordian(`Daughter ${i}`));
      }
    }
    return accordians;
  };

  const renderAccordian = (familyMember) => {
    return (
      <div key={familyMember}>
        <h2>{familyMember}</h2>
        <form>
          {newHealthQuestions.map((question, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={checkboxStates[index].checked}
                  onChange={() => handleCheckboxChange(index)}
                />
                {question.description}
              </label>
              {checkboxStates[index].checked && (
                <input
                  type="month"
                  placeholder="yyyy-MM"
                  value={checkboxStates[index].date}
                  onChange={(e) => handleDateInputChange(index, e.target.value)}
                />
              )}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  return <div>{renderAccordians()}</div>;
};

export default HealthForm;
