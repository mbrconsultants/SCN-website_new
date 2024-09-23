import React from "react";
import Link from "next/link";
import BlogRecentSection from "./RecentNews";

const PastChiefRegistrars = () => {
  return (
    <section>
      <div className="container pb-100">
        <div className="section-content">
          <div className="row">
            <div className="col-md-8">
              <div className="sec-title text-center">
                <span className="sub-title">
                  Meet our past chief registrars
                </span>
                <h2 style={{ color: "#2BB584" }}>Past Chief Registrars</h2>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Fullname</th>
                      <th>Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="cart_item">
                      <td>1</td>

                      <td className="product-name">
                        <Link href="#">C.O. Madarikan Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1958 - 1960</span>
                      </td>
                    </tr>
                    <tr className="cart_item">
                      <td>2</td>

                      <td className="product-name">
                        <Link href="#">G. S. Sowemimo Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1960 - 1961</span>
                      </td>
                    </tr>{" "}
                    <tr className="cart_item">
                      <td>3</td>

                      <td className="product-name">
                        <Link href="#">J. A. Adefarasin Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1961 - 1962</span>
                      </td>
                    </tr>{" "}
                    <tr className="cart_item">
                      <td>4</td>

                      <td className="product-name">
                        <Link href="#">O. R. I. George Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1962 - 1963</span>
                      </td>
                    </tr>{" "}
                    <tr className="cart_item">
                      <td>5</td>

                      <td className="product-name">
                        <Link href="#">M. A. Macauley Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1963 - 1967</span>
                      </td>
                    </tr>{" "}
                    <tr className="cart_item">
                      <td>6</td>

                      <td className="product-name">
                        <Link href="#">Akinbo Savage Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1967 - 1972</span>
                      </td>
                    </tr>{" "}
                    <tr className="cart_item">
                      <td>7</td>

                      <td className="product-name">
                        <Link href="#">K. Ibidapo Obe Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1972 - 1977</span>
                      </td>
                    </tr>{" "}
                    <tr className="cart_item">
                      <td>8</td>

                      <td className="product-name">
                        <Link href="#">G.O Jackman, (Mrs)</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1977 - 1983</span>
                      </td>
                    </tr>{" "}
                    <tr className="cart_item">
                      <td>9</td>

                      <td className="product-name">
                        <Link href="#">F.A. Owobiyi Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1983 - 1989</span>
                      </td>
                    </tr>{" "}
                    <tr className="cart_item">
                      <td>10</td>

                      <td className="product-name">
                        <Link href="#">R.A Kasim Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1989 - 1991</span>
                      </td>
                    </tr>
                    <tr className="cart_item">
                      <td>11</td>

                      <td className="product-name">
                        <Link href="#">T. I. Adesalu Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1992 - 1995</span>
                      </td>
                    </tr>
                    <tr className="cart_item">
                      <td>12</td>

                      <td className="product-name">
                        <Link href="#">M. M. Dodo Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">1995 - 2003</span>
                      </td>
                    </tr>
                    <tr className="cart_item">
                      <td>13</td>

                      <td className="product-name">
                        <Link href="#">D. Z. Senchi Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">2003 - 2007</span>
                      </td>
                    </tr>
                    <tr className="cart_item">
                      <td>14</td>

                      <td className="product-name">
                        <Link href="#">Usman Alh. Musale Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">2007 - 2010</span>
                      </td>
                    </tr>
                    <tr className="cart_item">
                      <td>15</td>

                      <td className="product-name">
                        <Link href="#">Mr. Sunday Olorundahunsi</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">2010 - 2014</span>
                      </td>
                    </tr>
                    <tr className="cart_item">
                      <td>16</td>

                      <td className="product-name">
                        <Link href="#">Ahmed Gambo Saleh Esq</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">2014 - 2017</span>
                      </td>
                    </tr>
                    <tr className="cart_item">
                      <td>17</td>

                      <td className="product-name">
                        <Link href="#">Hadizatu Uwani Mustapha</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">2017 - 2021</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4">
              <BlogRecentSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastChiefRegistrars;
