import "./App.css";
import React from "react";
import logo from "./assets/Aditya-Birla-news-logo.png";
import { hospitalDeclaration, patientDeclaration } from "./assets/constants";

const App = () => {
  return (
    <form>
      <div className="m-5 border border-black ">
        <div className="flex justify-center font-semibold">
          REQUEST FOR CASHLESS HOSPITALISATION FOR HEALTH INSURANCE POLICY
        </div>
        <div className="w-full">
          <div className="flex justify-between w-[60%]">
            <img className="ml-[1%] h-[45px]" src={logo} alt="aditya logo" />
            <div>(TO BE FILLED IN BLOCK LETTERS)</div>
          </div>
        </div>
        <div className="flex justify-center font-semibold underline">
          DETAILS OF THE THIRD PARTY ADMINISTRATOR/INSURER/HOSPITAL:
        </div>
        <div className="w-full ml-[1%] mt-[0.5%]">
          a. Name of TPA/Insurance company:{" "}
          <span className="font-semibold">
            PARAMOUNT HEALTH SERVICES & INSURANCE TPA PVT.LTD.
          </span>
          <div className="flex justify-end w-[90%]">(IRDA LICENCE No .006)</div>
        </div>
        <div className="ml-[2%] text-blue-700 font-semibold">
          Cashless Request E-mail Id: al.request@paramounttpa.com
        </div>
        <div className="ml-[1%] mt-[0.5%]">
          b. Toll free phone number: 1800-22-66 55
        </div>
        <div className="ml-[1%] mt-[0.5%]">
          c. Toll free fax: 022-66444754/66444755/66444709
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          d. Name of the Hospital:
          <input type="text" className="border-black border-b-2 w-[85%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          i. Address
          <input type="text" className="border-black border-b-2 w-[90%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          ii. Rohini ID:
          <input type="text" className="border-black border-b-2 w-[90%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          iii. E-mail ID:
          <input type="text" className="border-black border-b-2 w-[90%]" />
        </div>
        <div className="mt-[0.5%] flex justify-center font-semibold underline">
          TO BE FILLED BY INSURED/PATIENT:
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          A. Name of the Patient:
          <input type="text" className="border-black border-b-2 w-[85%]" />
        </div>
        <div className="w-[80%] ml-[1%] mt-[1%] flex justify-between items-center ">
          B. Gender:
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="gender"
              value="male"
            />
            <div>Male</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="gender"
              value="female"
            />
            <div>Female</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="gender"
              value="third"
            />
            <div>Third Gender</div>
          </div>
        </div>
        <div className="w-[80%] ml-[1%] mt-[1%] flex justify-between items-center ">
          C. Age:
          <div className="flex">
            <input
              type="number"
              className="border-b-2 border-black mr-1"
              maxLength={3}
            />
            <div>Years</div>
          </div>
          <div className="flex">
            <input
              type="number"
              className="border-b-2 border-black mr-1"
              maxLength={2}
            />
            <div>Months</div>
          </div>
        </div>
        <div className="w-[60%] ml-[1%] mt-[1%] flex justify-between items-center ">
          D. Date of Birth:
          <div className="flex">
            <input
              type="text"
              className=" mr-1 pl-[40%]"
              placeholder="DD/MM/YYYY"
              maxLength={10}
            />
          </div>
        </div>

        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          E. Contact number:
          <input type="text" className="border-black border-b-2 w-[85%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          F. Contact number of attending Relative:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          G. Insured Card ID number:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          H. Policy number/Name of Corporate:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          I. Employee ID:
          <input type="text" className="border-black border-b-2 w-[85%]" />
        </div>
        <div className="w-[80%] ml-[1%] mt-[1%] flex justify-between items-center ">
          J. Currently do you have any other mediclaim/health insurance:
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="mediclaim"
              value="yes"
            />
            <div>Yes</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="mediclaim"
              value="no"
            />
            <div>No</div>
          </div>
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          i. Company Name:
          <input type="text" className="border-black border-b-2 w-[87%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          i. Give Details:
          <input type="text" className="border-black border-b-2 w-[87%]" />
        </div>
        <div className="w-[80%] ml-[1%] mt-[1%] flex justify-between items-center ">
          K. Do you have a family Physician:
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="familyPhysician"
              value="yes"
            />
            <div>Yes</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="familyPhysician"
              value="no"
            />
            <div>No</div>
          </div>
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          L. Name of the Family Physician:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          M. Contact number, if any:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          N. Current Address of Insured Patient:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          O. Occupation of Insured Patient:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="flex justify-center font-semibold">
          (PLEASE COMPLETE DECLARATION OF THIS FORM)
        </div>
      </div>
      <div className="m-5 border border-black ">
        <div className="mt-[0.5%] flex justify-center font-semibold underline">
          TO BE FILLED BY TREATING DOCTOR /HOSPITAL:
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          A. Name of the treating Doctor:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          B. Contact Number:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          C. Nature of Illness / Disease with presenting complaint:
          <input type="text" className="border-black border-b-2 w-[60%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          D. Relevant Critical Findings:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          E. Duration of present ailment:
          <div className="mr-[30%]">
            <input type="text" className="border-black border-b-2" />
            Days
          </div>
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          i. Date of First consultation:
          <input type="text" className="border-black border-b-2 w-[76.5%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          ii. Past history of present ailment, if any:
          <input type="text" className="border-black border-b-2 w-[76.5%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          F. Provisional Diagnosis:
          <input type="text" className="border-black border-b-2 w-[85%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          i. ICD 10 code:
          <input type="text" className="border-black border-b-2 w-[87%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          G. Proposed line of treatment:
        </div>

        <div className="w-[30%] ml-[3%] mt-[1%] flex justify-between items-center ">
          i. Medical Management
          <div className="flex justify-start">
            <input
              type="checkbox"
              className="  border-black border-b-2"
              name="Medical Management"
            />
          </div>
        </div>
        <div className="w-[30%] ml-[3%] mt-[1%] flex justify-between items-center ">
          ii. Surgical Management
          <div className="flex justify-start">
            <input
              type="checkbox"
              className="  border-black border-b-2"
              name="Surgical Management"
            />
          </div>
        </div>
        <div className="w-[30%] ml-[3%] mt-[1%] flex justify-between items-center ">
          iii. Intensive care
          <div className="flex justify-start">
            <input
              type="checkbox"
              className="  border-black border-b-2"
              name="Intensive care"
            />
          </div>
        </div>
        <div className="w-[30%] ml-[3%] mt-[1%] flex justify-between items-center ">
          iv. Investigation
          <div className="flex justify-start">
            <input
              type="checkbox"
              className="  border-black border-b-2"
              name="Investigation"
            />
          </div>
        </div>
        <div className="w-[30%] ml-[3%] mt-[1%] flex justify-between items-center ">
          v. Non-allopathic treatment
          <div className="flex justify-start">
            <input
              type="checkbox"
              className="  border-black border-b-2"
              name="Non-allopathic treatment"
            />
          </div>
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          H. If Investigation and / or Medical Management, provide details:
          <input type="text" className="border-black border-b-2 w-[60%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          i. Route of Drug Administration:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          I. If surgical, name of surgery:
          <input type="text" className="border-black border-b-2 w-[73.5%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          i. ICD 10 PCS code:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          J. If other treatment, provide details:
          <input type="text" className="border-black border-b-2 w-[73.5%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          K. How did injury occur:
          <input type="text" className="border-black border-b-2 w-[73.5%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          L. In case of accident:
        </div>
        <div className="w-[80%] ml-[3%] mt-[1%] flex justify-between items-center ">
          i. Is it RTA:
          <div className="flex">
            <input type="radio" className="w-5 mr-1" name="RTA" value="yes" />
            <div>Yes</div>
          </div>
          <div className="flex">
            <input type="radio" className="w-5 mr-1" name="RTA" value="no" />
            <div>No</div>
          </div>
        </div>
        <div className="w-[60%] ml-[3%] mt-[1%] flex justify-between items-center ">
          ii. Date of Injury:
          <div className="flex">
            <input
              type="text"
              className=" mr-1 pl-[40%]"
              placeholder="DD/MM/YYYY"
              maxLength={10}
            />
          </div>
        </div>
        <div className="w-[80%] ml-[3%] mt-[1%] flex justify-between items-center ">
          iii. Report to Police:
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="Police"
              value="yes"
            />
            <div>Yes</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1 ml-[50px]"
              name="Police"
              value="no"
            />
            <div>No</div>
          </div>
        </div>
        <div className="w-[80%] ml-[3%] mt-[1%] flex justify-between items-center ">
          iv. FIR No.
          <input
            type="text"
            className=" mr-1 pl-[40%] border-b-slate-400"
            maxLength={10}
          />
        </div>
        <div className="w-[80%] ml-[3%] mt-[1%] flex justify-between items-center ">
          v. Injury / Disease caused due to substance abuse/alcohol consumption:
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="alcohol"
              value="yes"
            />
            <div>Yes</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1 ml-[375px]"
              name="alcohol"
              value="no"
            />
            <div>No</div>
          </div>
        </div>
        <div className="w-[80%] ml-[3%] mt-[1%] flex justify-between items-center ">
          vi. Test conducted to establish this (if yes, attach report):
          <div className="flex">
            <input type="radio" className="w-5 mr-1" name="Test" value="yes" />
            <div>Yes</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1 ml-[282px]"
              name="Test"
              value="no"
            />
            <div>No</div>
          </div>
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          M. In case of Maternity:
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="Maternity"
              value="G"
            />
            <div>G</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="Maternity"
              value="P"
            />
            <div>P</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="Maternity"
              value="L"
            />
            <div>L</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 mr-1"
              name="Maternity"
              value="A"
            />
            <div>A</div>
          </div>
        </div>
        <div className="w-[60%] ml-[3%] mt-[1%] flex justify-between items-center ">
          i. Expected date of Delivery:
          <div className="flex">
            <input
              type="text"
              className=" mr-1 pl-[40%]"
              placeholder="DD/MM/YYYY"
              maxLength={10}
            />
          </div>
        </div>
      </div>
      <div className="m-5 border border-black ">
        <div className="mt-[0.5%] flex justify-center font-semibold underline">
          DETAILS OF PATIENT ADMITIED
        </div>
        <div className="w-[60%] ml-[1%] mt-[1%] flex justify-between items-center ">
          A. Date of admission:
          <div className="flex">
            <input
              type="text"
              className=" mr-1 pl-[40%]"
              placeholder="DD/MM/YYYY"
              maxLength={10}
            />
          </div>
        </div>
        <div className="w-[60%] ml-[1%] mt-[1%] flex justify-between items-center ">
          B. Time of admission:
          <div className="flex">
            <input
              type="text"
              className=" mr-1 pl-[50%]"
              placeholder="(HH:MM)"
              maxLength={7}
            />
          </div>
        </div>
        <div className="w-[80%] ml-[1%] mt-[1%] flex justify-between items-center ">
          C. Is this an emergency/planned hospitalization event:
          <div className="flex">
            <div>Emergency</div>
            <input
              type="radio"
              className="w-5 ml-1"
              name="event"
              value="Emergency"
            />
          </div>
          <div className="flex">
            <div>Planned</div>
            <input
              type="radio"
              className="w-5 ml-1 "
              name="event"
              value="Planned"
            />
          </div>
        </div>
        <div className=" ml-[1%] mt-[0.5%] w-[72%] flex justify-between">
          D. Mandatory Past History of any chronic illness
          <div>If yes (Since month/year)</div>
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          i. Diabetes:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          ii. Heart disease:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          iii. Hypertension:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          iv. Hyperlipidemias:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          v. Osteoarthritis:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          vi. Astma / COPD / Bronchitis:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          vii. Cancer:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          viii. Alcohol / Drug abuse:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          ix. Any HIV or STD Retatenate:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between">
          x. Any other ailment, give details:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] w-[75%] flex justify-between">
          E. Expected number of Days /stay in hospital
          <div>
            <input type="text" className="border-black border-b-2 " />
            Days
          </div>
        </div>
        <div className="ml-[1%] mt-[0.5%] w-[75%] flex justify-between">
          F. Days in ICU
          <div>
            <input type="text" className="border-black border-b-2 " />
            Days
          </div>
        </div>
        <div className="ml-[1%] mt-[0.5%] w-[72.5%] flex justify-between">
          G. Room Type
          <div>
            <input type="text" className="border-black border-b-2" />
          </div>
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          H. Per day room rent + mursing and service charges + patients diet
          <input type="text" className="border-black border-b-2 w-[41.7%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          I. Expected cost of investigation + diagnostic
          <input type="text" className="border-black border-b-2 w-[41.7%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          J. ICU charges
          <input type="text" className="border-black border-b-2 w-[41.7%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          K. OT charges
          <input type="text" className="border-black border-b-2 w-[41.7%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          L. Profesional fees Surgeon + Anesthetist Fees + Consultation Charges
          <input type="text" className="border-black border-b-2 w-[41.7%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          M. Medicines + Consumables + Cost of Implants of applicable please
          specify
          <input type="text" className="border-black border-b-2 w-[41.7%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          N. Other hospital expenses if any
          <input type="text" className="border-black border-b-2 w-[41.7%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          O. All - inclusive package charges if any applicable
          <input type="text" className="border-black border-b-2 w-[41.7%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] mb-[1%] flex justify-between">
          P. Sum Total expected cost of hospitalization
          <input type="text" className="border-black border-b-2 w-[41.7%]" />
        </div>
      </div>
      <div className="m-5 border border-black h-[900px]">
        <div className="mt-[0.5%] flex justify-center font-semibold">
          DECLARATION
        </div>
        <div className=" flex justify-center font-semibold">
          (Please read very carefully)
        </div>
        <div className="ml-[1%] mt-[0.5%]">
          We confirm having read understood and agreed to the Declarations of
          this form
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          a. Name of the treating doctor:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          b. Qualification:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[0.5%] flex justify-between">
          c. Registration number with State code:
          <input type="text" className="border-black border-b-2 w-[75%]" />
        </div>
        <div className="ml-[1%] mt-[4%] flex justify-evenly">
          <div className="flex flex-col">
            <input
              type="text"
              className="border border-black w-[300px] h-[90px]"
              readOnly
            />
            <div className="flex justify-center">Hostipal Seal</div>
            <div className="flex justify-center">
              (Must include Hospital ID)
            </div>
          </div>
          <div>
            <input
              type="text"
              className="border border-black w-[300px] h-[90px]"
              readOnly
            />
            <div className="flex justify-center mt-6">
              Patient/Insured Name and Sign
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 mt-5 border border-black ">
        <div className="mt-[0.5%] flex justify-center font-semibold underline">
          DECLARATION BY THE PATIENT / REPRESENTATIVE
        </div>
        {patientDeclaration.map((list) => (
          <div className="mx-[1%] mt-[0.5%] flex" key={list.heading}>
            {list.heading}
            <div className="ml-[1%]">{list.body}</div>
          </div>
        ))}
        <div className="ml-[3%] mt-[0.5%] flex justify-between w-[35%]">
          a) Patient's / Insured's Name:
          <div>
            <input type="text" placeholder="Patient's Name" maxLength={7} />
          </div>
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between w-[75%]">
          <div className="flex">
            b) Contact number:
            <div>
              <input
                type="text"
                className="ml-[70%]"
                placeholder="Contact Number"
                maxLength={7}
              />
            </div>
          </div>
          <div className="flex">
            c) e-mail Id (optional):
            <div>
              <input
                type="email"
                className="ml-[70%]"
                placeholder="E-mail"
                maxLength={7}
              />
            </div>
          </div>
        </div>
        <div className="ml-[3%] mt-[0.5%] flex justify-between w-[35%]">
          d) Patient's / Insured's Signature:
          <div>
            <input type="text" maxLength={7} />
          </div>
        </div>
        <div className="mt-[0.5%] flex justify-center font-semibold underline">
          HOSPITAL DECLARATION
        </div>
        {hospitalDeclaration.map((list) => (
          <div className="mx-[1%] mt-[0.5%] flex" key={list.heading}>
            {list.heading}
            <div className="ml-[1%]">{list.body}</div>
          </div>
        ))}
        <div className="mt-[0.5%] ml-[1%] w-[55%] flex justify-between">
          <div>Hospital Seal:</div>
          <div className="flex justify-end">Doctor's Signature:</div>
        </div>
        <div className="my-[0.5%] ml-[1%] w-[70.2%] flex justify-between">
          <div className="flex">
            Date:{" "}
            <input
              type="text"
              className=" mr-1 pl-[40%]"
              placeholder="DD/MM/YYYY"
              maxLength={10}
            />
          </div>
          <div className="flex">
            Time:{" "}
            <input
              type="text"
              className=" mr-1 pl-[40%]"
              placeholder="HH:MM"
              maxLength={10}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center font-semibold">
        Registered office Plot No.A-442. Road no.28.M.L.D.C.Industrial Area,
        Wagle Estate, Thane(w), Thane-Maharashtra-400604.
      </div>
      <div className="flex justify-center font-semibold">
        Tel-66620808,Fax-66444754/55, E-mail-contact.phs@paramounttpa.com
      </div>
      <a
        href="www.paramounttpa.com"
        className="flex justify-center font-semibold">
        www.paramounttpa.com
      </a>
      <button type="submit" className="flex justify-center font-semibold">
        Next
      </button>
    </form>
  );
};

export default App;
