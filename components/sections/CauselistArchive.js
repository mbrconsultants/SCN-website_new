import Link from "next/link";
import { useState, useEffect } from "react";
import endpointDiary from '../../utils/endpointDiary'

const CauselistArchive = () => {

    const [isLoading, setLoading] = useState(false);
    const [dailyCauseList, setDailyCauseList] = useState([]);
    const [noData, setNoData] = useState(false);
    const [date, setDate] = useState('');

    const getDailyCauseList = async () => {
        try {
            const response = await endpointDiary.get("/cause-list/daily-list");
            const data = response.data;
            if (data.data.length == 0) {
                setNoData(true)
            } else {
                setNoData(false)
            }
            setLoading(true)
            let causeArr = data.data

            const groupedData = causeArr.reduce((result, obj) => {
                const key = obj.CaseType.case_type + ' ' + obj.CaseTypeCategory.case_type_cat;

                if (!result[key]) {
                    result[key] = [];
                }

                result[key].push(obj);
                return result;

            }, []);
            setDailyCauseList(groupedData)
            setLoading(false)
            return

        } catch (error) {
            setLoading(false)
            console.error("Error fetching causelist:", error);
        }
    };

    const dateSuffix = (day) => {
        if ((day == 1) || (day == 21) || (day == 31)) {
            return day + '' + "st";
        } else if ((day == 2) || (day == 22)) {
            return day + '' + "nd";
        } else if ((day == 3) || (day == 23)) {
            return day + '' + "rd";
        } else {
            return day + '' + "th";
        }
    }

    const formattedDate = date && (new Date(date).toLocaleDateString('en-us', { weekday: "long" }) + ", " + dateSuffix(new Date(date).toLocaleDateString('en-us', { day: "numeric" })) + " day of " +
        new Date(date).toLocaleDateString('en-us', { month: "long" }) + ", " + new Date(date).toLocaleDateString('en-us', { year: "numeric" })).toUpperCase();

    const curDate = new Date()
    const dateStr = (curDate.toLocaleDateString('en-us', { weekday: "long" }) + ", " + dateSuffix(curDate.toLocaleDateString('en-us', { day: "numeric" })) + " day of " +
        curDate.toLocaleDateString('en-us', { month: "long" }) + ", " + curDate.toLocaleDateString('en-us', { year: "numeric" })).toUpperCase();

    const alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    useEffect(() => {
        getDailyCauseList()
    }, [])

    //function that adds "judgement" to heading
    const splitHeading = (str) => {
        const firstSpaceIndex = str.indexOf(' ')
        const firstPart = str.slice(0, firstSpaceIndex)
        return (firstPart + ' ' + 'Judgement').toUpperCase()
    }

    //function that removes the adjournment id from heading
    const removeNumber = (str) => {
        const result = str.replace(/[0-9]/g, '')
        return (result + ' ' + '(s)').toUpperCase()
    }

    return (
        <>
            <section>
                <div className="container pt-5 pb-100">
                    <div className="section-content pt-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-title text-center">
                                    <span className="sub-title">causelist</span>
                                    <h2 style={{ color: "#0EA476" }}>Daily Causelist</h2>
                                </div>
                            </div>
                        </div>
                        <div id='divToPrint' className="">
                            <div className='row' id="rowHeader">
                                <div className='col-md-12 text-center' style={{ textDecoration: `underline`, fontSize: '18px', fontWeight: 'bold' }}> <span>IN THE SUPREME COURT OF NIGERIA</span><br />
                                    HOLDEN AT ABUJA <br />
                                    CAUSELIST FOR {date ? formattedDate : dateStr.toUpperCase()}
                                </div>
                            </div>

                            {isLoading && <p className="text-center p-5">Fetching data...</p>}
                            {noData && <p className="text-center p-5"> <img src="/images/emptyIcon.jpg" style={{ height: '90px', width: '90px' }} alt="No data" /> <br />  No causelist available for today...</p>}
                            {!isLoading &&
                                <div className='row mt-4'>
                                    <div className='col-md-12'>

                                        {Object.entries(dailyCauseList).map(([headings, items], index) => (
                                            <>
                                                <div className='causeListHeading'>
                                                    <div className='text-center mb-2' style={{
                                                        color: `${headings.toUpperCase().includes("CIVIL") ? 'green' : headings.toUpperCase().includes("CRIMINAL") ? "red" : headings.toUpperCase().includes("POLITICAL") ? "blue" : ""}
                                        `}}>

                                                        {headings.includes(2) ? `${alphabetArray[index]}.` + ' ' + splitHeading(headings) : `${alphabetArray[index]}.` + ' ' + removeNumber(headings)}
                                                        {/* {alphabetArray[index]}. {headings.toUpperCase()}(S) */}
                                                    </div>
                                                    <div className='table-responsive'>
                                                        <table className="table table-striped table-bordered tbl-shopping-cart mb-5" style={{ width: `100%` }}>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{ border: `1px solid black` }}>SN.</th>
                                                                    <th scope="col" style={{ border: `1px solid black` }}>APPEAL NO.</th>
                                                                    {headings.toUpperCase().includes("APPEAL") ?
                                                                        <>
                                                                            <th scope="col" style={{ border: `1px solid black` }}>APPELLANTS</th>
                                                                            <th scope="col" style={{ border: `1px solid black` }}>RESPONDENTS</th>
                                                                        </>
                                                                        : <>
                                                                            <th scope="col" style={{ border: `1px solid black` }}>PARTIES</th>
                                                                            <th scope="col" style={{ border: `1px solid black` }}>APPLICATIONS</th>
                                                                        </>
                                                                    }

                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                {
                                                                    items.map((item, index) => (
                                                                        <tr key={index} style={{ border: `1px solid black` }}>
                                                                            <td style={{ border: `1px solid black` }}>{index + 1}.</td>
                                                                            <td style={{ border: `1px solid black`, fontWeight: 'bold', color: `${item.CaseType.case_color}` }}> {item.firstcase.suite_no}</td>
                                                                            {headings.toUpperCase().includes("APPEAL") ?
                                                                                <>
                                                                                    <td style={{ whiteSpace: `normal`, border: `1px solid black` }}>
                                                                                        <tr>{item.firstcase.appellants}</tr>
                                                                                        <tr>{item.firstcase.appellants_title}</tr>
                                                                                    </td>
                                                                                    <td style={{ whiteSpace: `normal`, border: `1px solid black` }}>
                                                                                        <tr>{item.firstcase.respondent}</tr>
                                                                                        <tr>{item.firstcase.respondent_title}</tr>
                                                                                    </td>
                                                                                </>
                                                                                :
                                                                                <>
                                                                                    {/* <td style={{ whiteSpace: `normal` }}>{item.parties}</td> */}
                                                                                    <td className='text-center' style={{ whiteSpace: `normal`, border: `1px solid black` }}>
                                                                                        <tr>{item.firstcase.appellants}</tr>
                                                                                        <tr>({item.firstcase.appellants_title}(s))</tr>
                                                                                        <tr><div className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>VS.</div></tr>
                                                                                        <tr>{item.firstcase.respondent}</tr>
                                                                                        <tr>({item.firstcase.respondent_title}(s))</tr>
                                                                                    </td>
                                                                                    <td style={{ whiteSpace: `pre-wrap`, border: `1px solid black`, wordWrap: `break-word` }}>{item.firstcase.case_desc}</td>
                                                                                </>
                                                                            }

                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                </div>
                                            </>
                                        ))}

                                    </div>
                                </div>
                            }

                            {Object.entries(dailyCauseList).length > 0 &&
                                <div className='col-md-12 hideBtn'>
                                    {!isLoading && <button className="theme-btn btn-style-one" type="button" onClick={() => window.print()} id="button-addon2"><span className="fa fa-print"> </span> &nbsp; Print</button>}
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default CauselistArchive;
