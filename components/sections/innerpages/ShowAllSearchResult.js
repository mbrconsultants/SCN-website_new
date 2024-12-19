import { useEffect, useState } from "react";
import Link from "next/link";
import BlogRecentSection from "../RecentNews";
import endpoint from "../../../utils/endpoint";
import { useParams } from "next/navigation";

const ShowAllSearchResult = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [meta, setMeta] = useState();

    const getData = async (url) => {
        if (url) {
            url = url;
        } else {
            url = `/search/${id}`;
        }

        setLoading(true)
        try {
            const response = await endpoint.get(url)
            const { data, ...rest } = response.data.data;
            setData(response.data.data);
            setMeta(rest);
            setLoading(false)
        } catch (error) {
            console.log("err", error)
            setLoading(false)
        }
    };

    const onPageClick = (url) => {
        getData(url);
    };

    useEffect(() => {
        getData();
    }, [id]);
    
    const highlightAndAddContext = (text, searchKey, contextWords = 10) => {
        if (!text || !searchKey) return "";

        const regex = new RegExp(`(${searchKey})`, "gi");
        const words = text.split(" ");

        // Find all indices where the search key appears
        const matchIndices = [];
        words.forEach((word, index) => {
            if (regex.test(word)) matchIndices.push(index);
        });

        if (matchIndices.length === 0) {
            // No match, return the first few words
            return words.slice(0, contextWords * 2).join(" ") + "...";
        }

        // Build the context around the first match
        const firstMatchIndex = matchIndices[0];
        const start = Math.max(0, firstMatchIndex - contextWords);
        const end = Math.min(words.length, firstMatchIndex + contextWords + 1);

        const context = words.slice(start, end).join(" ");

        // Highlight the search key in the context
        return context.replace(regex, `<strong>$1</strong>`);
    };

    const getFileType = (link) => {
        if (/\.pdf$/i.test(link)) return "pdf";
        if (/\.docx?$/i.test(link)) return "doc"; // Matches .doc or .docx
        return "link"; // Default for other types
    };

    return (
        <>
            <section className="pricing-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2 style={{ color: "#0EA476" }}>
                            Search Result <span className="fa fa-search"></span>
                        </h2>
                    </div>
                    {loading && (
                        <div className="row text-center">
                            {" "}
                            <p>Fetching data...</p>{" "}
                        </div>
                    )}
                    {!loading && (
                        <div className="row">
                            <div
                                className="pricing-block-three col-xl-8 col-lg-8 col-md-8 col-sm-12 wow fadeInUp"
                            >
                                {(data.data && data.data.length > 0) ? (
                                    data.data.map((result, index) => (

                                        <div className="inner-box" key={index}>
                                            <div className="title-box">
                                                <div> <i>{result.type}</i> </div>
                                                <h6 className="title">{result.name}</h6>
                                                <div className="text"
                                                dangerouslySetInnerHTML={{
                                                    __html: highlightAndAddContext(
                                                        result.description,
                                                        id,
                                                        10 // Number of words as context before and after
                                                    ),
                                                }}>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                {/* <div>
                                                    <figure className="image">
                                                        <Link
                                                            href={act.file_path}
                                                            target="_blank">
                                                            <img
                                                                src="/images/resource/icon.jpg"
                                                                alt="Image"
                                                                style={{ height: "50px", width: "50px" }}
                                                            />{" "}
                                                        </Link>
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>

                                    ))
                                ) : (
                                    <div className="card shadow-lg text-center">
                                        <h5 className="title">No result found.</h5>
                                    </div>
                                )}
                            </div>

                            <div
                                className="image-column col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeInRight"
                                data-wow-delay="300ms">
                                <div className="inner-column">
                                    <BlogRecentSection />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};
export default ShowAllSearchResult;
