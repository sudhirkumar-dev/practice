import { useState, useEffect, useMemo } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { newHealthQuestions, familyData ,newData} from "./HealthQuestions";
import './App.css';


const FamilyMedicalDetailsForm = () => {
  const [checkboxStates, setCheckboxStates] = useState({});
  const [dateStates, setDateStates] = useState({});
  const [healthData, setHealthData] = useState([]);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const memoizedFamilyData = useMemo(() => familyData, [familyData]);
  console.log(memoizedFamilyData,"memoized fam data")

  useEffect(() => {
    Object.keys(memoizedFamilyData)
      .filter((familyMember) => memoizedFamilyData[familyMember])
      .forEach((familyMember) => initializeFamilyMemberState(familyMember));
  }, [memoizedFamilyData]);

  useEffect(() => {
    console.log(healthData);
  }, [healthData]);

  const initializeFamilyMemberState = (familyMember) => {
    setCheckboxStates((prevCheckboxStates) => ({
      ...prevCheckboxStates,
      [familyMember]: newHealthQuestions.map(() => ({ checked: false })),
    }));

    setDateStates((prevDateStates) => ({
      ...prevDateStates,
      [familyMember]: newHealthQuestions.map(() => ({ date: "" })),
    }));
  };

  const handleCheckboxChange = (familyMember, index) => {
    setCheckboxStates((prevCheckboxStates) => {
      const updatedCheckboxStates = { ...prevCheckboxStates };
      if (Array.isArray(updatedCheckboxStates[familyMember])) {
        updatedCheckboxStates[familyMember] = [
          ...updatedCheckboxStates[familyMember],
        ];
        updatedCheckboxStates[familyMember][index] = {
          ...updatedCheckboxStates[familyMember][index],
          checked: !updatedCheckboxStates[familyMember][index].checked,
        };
      } else {
        updatedCheckboxStates[familyMember] = newHealthQuestions.map(() => ({
          checked: false,
        }));
        updatedCheckboxStates[familyMember][index] = {
          ...updatedCheckboxStates[familyMember][index],
          checked: !updatedCheckboxStates[familyMember][index].checked,
        };
      }
      return updatedCheckboxStates;
    });
  };

  const handleDateInputChange = (familyMember, index, value) => {
    setDateStates((prevDateStates) => {
      const updatedDateStates = { ...prevDateStates };
      updatedDateStates[familyMember] =
        updatedDateStates[familyMember] ||
        newHealthQuestions.map(() => ({ date: "" }));
      updatedDateStates[familyMember] = [...updatedDateStates[familyMember]];
      updatedDateStates[familyMember][index] = {
        ...updatedDateStates[familyMember][index],
        date: value,
      };
      return updatedDateStates;
    });
  };

  const formatMonthInput = (monthInputValue) => {
    const [year, month] = monthInputValue.split("-");
    const isValidDate = year && month && month?.length === 2;
    return isValidDate ? `${month}/${year}` : "";
  };

  const handleSubmit = (e, familyMember) => {
    e.preventDefault();
    const existingIndex = healthData.findIndex((item)=>
      Object.keys(item).includes(familyMember)
    );
    console.log(existingIndex);
    const PedData = [];
    newHealthQuestions.forEach((question, index) => {
      const questionSetCd = question.question;
      const questionCd = question.qcd;
      const isChecked = checkboxStates[familyMember]?.[index]?.checked || false;
      const sinceQuestion = question.sinceQuestion;
      const response = isChecked ? "YES" : "NO";
      const date =
        dateStates[familyMember]?.[index]?.date || formatMonthInput("");

      PedData.push({
        questionSetCd: questionSetCd,
        questionCd: questionCd,
        response: response,
      });
      PedData.push({
        questionSetCd: questionSetCd,
        questionCd: sinceQuestion,
        response: formatMonthInput(date),
      });
    });
    const dataObject = {
      [familyMember]: PedData,
    };

    if(existingIndex !== -1){
      setHealthData((prevData)=>[
        ...prevData.slice(0,existingIndex),dataObject,...prevData.slice(existingIndex+1)
      ])
    }else{
      setHealthData((prevDataForApi) => [...prevDataForApi, dataObject]);
    }
    setExpandedAccordion(null); 
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

  const renderAccordions = () => {
    const accordions = [];
    Object.keys(memoizedFamilyData)
      .filter((familyMember) => memoizedFamilyData[familyMember])
      .forEach((familyMember) => {
        if (familyMember === "son" && memoizedFamilyData.sonCount >= 1) {
          for (let i = 1; i <= memoizedFamilyData.sonCount; i++) {
            accordions.push(renderAccordion(`son${i}`));
          }
        } else if (
          familyMember === "daughter" &&
          memoizedFamilyData.daughterCount >= 1
        ) {
          for (let i = 1; i <= memoizedFamilyData.daughterCount; i++) {
            accordions.push(renderAccordion(`daughter${i}`));
          }
        } else if (
          familyMember !== "sonCount" &&
          familyMember !== "daughterCount"
        ) {
          accordions.push(renderAccordion(familyMember));
        }
      });
    return accordions;
  };

  const renderAccordion = (familyMember) => {
    const panel = familyMember.toLowerCase(); 
    const isExpanded = panel === expandedAccordion;
    const memberData = newData[familyMember]
    console.log(memberData)

    return (
      <Accordion
        key={familyMember}
        expanded={isExpanded}
        onChange={handleAccordionChange(panel)}
        style={{
          border: '2px solid #ccc',  
          borderRadius: '8px',      
          marginBottom: '10px',      
        }}      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${panel}-content`}
          id={`${panel}-header`}
        >
          <Typography>{memberData?.title} {memberData?.firstName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className="question-form">
            {newHealthQuestions.map((question, index) => (
              <div key={index}>
                <div className="questions">

                <label>
                  <p>
                    <span>Q.</span>
                    {question.description}
                  </p>
                  <input
                    type="checkbox"
                    checked={checkboxStates[familyMember]?.[index]?.checked}
                    onChange={() => handleCheckboxChange(familyMember, index)}
                  />
                </label>
                </div>
                {checkboxStates[familyMember]?.[index]?.checked && (
                  <>
                  <div className="date-box">

                  <input
                    type="month"
                    placeholder="yyyy-MM"
                    value={dateStates[familyMember]?.[index]?.date}
                    onChange={(e) =>
                      handleDateInputChange(familyMember, index, e.target.value)
                    }
                    />
                    </div>
                    </>
                )}
              </div>
            ))}
            <div className="question-form-button">

            <button onClick={(e) => handleSubmit(e, familyMember)}>
              Submit
            </button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    );
  };

  return <div>{renderAccordions()}</div>;
};

export default FamilyMedicalDetailsForm;
