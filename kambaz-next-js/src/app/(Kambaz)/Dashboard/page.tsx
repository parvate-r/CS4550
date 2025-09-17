import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      <table>
        <tbody>
          <tr>
            <td valign="top" width="150px">
              <div id="wd-kambaz-navigation">
              <a href="https://www.northeastern.edu/" target="_blank" rel="noreferrer">Northeastern</a><br/>
              <Link href="/Account">Account</Link><br/>
              <Link href="/Dashboard">Dashboard</Link><br/>
              <Link href="/Labs">Labs</Link><br/>
            </div>

            </td>

            <td valign="top">
              <div id="wd-dashboard-courses">
                {/* Course 1 */}
                <div className="wd-dashboard-course">
                  <Link href="/Courses/1234" className="wd-dashboard-course-link">
                    <img src="/images/reactjs.jpg" width={200} height={150} alt="react" />
                    <div>
                      <h5>CS1234 React JS</h5>
                      <p className="wd-dashboard-course-title">Full Stack software developer</p>
                      <button> Go </button>
                    </div>
                  </Link>
                </div>

                {/* Repeat more courses (7 total minimum) */}
                <div className="wd-dashboard-course">
                  <Link href="/Courses/2345" className="wd-dashboard-course-link">
                    <img src="/images/reactjs.jpg" width={200} height={150} alt="react" />
                    <div>
                      <h5>CS2345 Node JS</h5>
                      <p className="wd-dashboard-course-title">Back-end with Node & Express</p>
                      <button> Go </button>
                    </div>
                  </Link>
                </div>

                <div className="wd-dashboard-course">
                  <Link href="/Courses/3456" className="wd-dashboard-course-link">
                    <img src="/images/reactjs.jpg" width={200} height={150} alt="react" />
                    <div>
                      <h5>CS3456 MongoDB</h5>
                      <p className="wd-dashboard-course-title">Databases with MongoDB</p>
                      <button> Go </button>
                    </div>
                  </Link>
                </div>

                <div className="wd-dashboard-course">
                  <Link href="/Courses/4567" className="wd-dashboard-course-link">
                    <img src="/images/reactjs.jpg" width={200} height={150} alt="react" />
                    <div>
                      <h5>CS4567 Next.js</h5>
                      <p className="wd-dashboard-course-title">Full-stack with Next.js</p>
                      <button> Go </button>
                    </div>
                  </Link>
                </div>

                <div className="wd-dashboard-course">
                  <Link href="/Courses/5678" className="wd-dashboard-course-link">
                    <img src="/images/reactjs.jpg" width={200} height={150} alt="react" />
                    <div>
                      <h5>CS5678 CSS</h5>
                      <p className="wd-dashboard-course-title">Styling & Layout</p>
                      <button> Go </button>
                    </div>
                  </Link>
                </div>

                <div className="wd-dashboard-course">
                  <Link href="/Courses/6789" className="wd-dashboard-course-link">
                    <img src="/images/reactjs.jpg" width={200} height={150} alt="react" />
                    <div>
                      <h5>CS6789 Testing</h5>
                      <p className="wd-dashboard-course-title">Testing & Debugging</p>
                      <button> Go </button>
                    </div>
                  </Link>
                </div>

                <div className="wd-dashboard-course">
                  <Link href="/Courses/7890" className="wd-dashboard-course-link">
                    <img src="/images/reactjs.jpg" width={200} height={150} alt="react" />
                    <div>
                      <h5>CS7890 Deployment</h5>
                      <p className="wd-dashboard-course-title">Deploying to Vercel</p>
                      <button> Go </button>
                    </div>
                  </Link>
                </div>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
