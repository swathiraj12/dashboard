import logo from "./Assets/Images/logo.png";
import profile1 from "./Assets/Images/profile1.jpg";
import profile2 from "./Assets/Images/profile2.jpg";
import profile3 from "./Assets/Images/profile3.jpg";
import profile4 from "./Assets/Images/profile4.jpg";
import plus from "./Assets/icons/plus-solid.svg";
import "./CSS/Home.css";
import { useContext, useState } from "react";
import { OrderDetails } from "./OrderDetail";

let Home = () => {
  let orderContent = useContext(OrderDetails);

  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark-mode-variables" : ""}`}>
      {/* ---SideBar--- */}
      <aside className={`sidebar ${menu ? 'open' : ''}`}>
        <div className="toggle">
          <div className="logo d-flex ">
            <img src={logo} alt="" />
            <h2>Swathi</h2>
          </div>

          <div className="close" id="close-btn" onClick={toggleMenu}>
            <span className="material-icons-sharp">close</span>
          </div>
        </div>

        <div className="sidebar">
          <a href="#">
            <span className="material-icons-sharp">dashboard</span>
            <h3>Dashboard</h3>
          </a>

          <a href="#">
            <span className="material-icons-sharp">person_outline</span>
            <h3>Users</h3>
          </a>

          <a href="#">
            <span className="material-icons-sharp">receipt_long</span>
            <h3>History</h3>
          </a>

          <a href="#" className="active">
            <span className="material-icons-sharp">insights</span>
            <h3>Analytics</h3>
          </a>

          <a href="#">
            <span className="material-icons-sharp">mail_outline</span>
            <h3>Tickets</h3>
            <span className="msg-count">27</span>
          </a>

          <a href="#">
            <span className="material-icons-sharp">inventory</span>
            <h3>Sale List</h3>
          </a>

          <a href="#">
            <span className="material-icons-sharp">report_gmailerrorred</span>
            <h3>Reports</h3>
          </a>

          <a href="#">
            <span className="material-icons-sharp">settings</span>
            <h3>Settings</h3>
          </a>

          <a href="#">
            <span className="material-icons-sharp">add</span>
            <h3>New Login</h3>
          </a>

          <a href="#">
            <span className="material-icons-sharp">logout</span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
      {/* ---End of SideBar--- */}

      {/* ---main Content--- */}
      <main>
        <h1>Analytics</h1>
        {/* ---Analysis--- */}
        <div className="analyse">
          <div className="sales">
            <div className="status">
              <div className="info">
                <h3>Total Sales</h3>
                <h1>$82,459</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx={38} cy={38} r={36}></circle>
                </svg>
                <div className="percentage">
                  <p>+85%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="visits">
            <div className="status">
              <div className="info">
                <h3>Site Visits</h3>
                <h1>56,564</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx={38} cy={38} r={36}></circle>
                </svg>
                <div className="percentage">
                  <p>-40%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="searches">
            <div className="status">
              <div className="info">
                <h3>Searches</h3>
                <h1>19,486</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx={38} cy={38} r={36}></circle>
                </svg>
                <div className="percentage">
                  <p>+30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---End of Analysis--- */}

        {/* ---New Users--- */}
        <div className="new-users">
          <h2>New Users</h2>
          <div className="user-list">
            <div className="user">
              <img src={profile1} alt="" />
              <h2>Laurah</h2>
              <p>45 mins ago</p>
            </div>
            <div className="user">
              <img src={profile3} alt="" />
              <h2>Mike</h2>
              <p>12 mins ago</p>
            </div>
            <div className="user">
              <img src={profile2} alt="" />
              <h2>Grey</h2>
              <p>1 hour ago</p>
            </div>
            <div className="user">
              <img src={profile4} alt="" />
              <h2>Derek</h2>
              <p>3 hours ago</p>
            </div>
            <div className="user">
              <img src={plus} alt="" />
              <h2>More</h2>
              <p>New User</p>
            </div>
          </div>
        </div>
        {/* ---End of New Users--- */}

        {/* ---Recent orders table--- */}
        <div className="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Course Number</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {orderContent && orderContent.length > 0 ? (
                orderContent.map((order, index) => (
                  <tr key={index}>
                    <td>{order.productName}</td>
                    <td>{order.productNumber}</td>
                    <td>{order.paymentStage}</td>
                    <td
                      className={
                        order.paymentStatus === "Declined"
                          ? "danger"
                          : order.paymentStatus === "Pending"
                          ? "warning"
                          : "primary"
                      }
                    >
                      {order.paymentStatus}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No orders found</td>
                </tr>
              )}
            </tbody>
          </table>
          <a href="#">Show All</a>
        </div>
        {/* ---End of Recent orders table--- */}
      </main>
      {/* ---End of Main Content--- */}

      {/* ---Right Section--- */}
      <div className="right-section">
        {/* ---Nav--- */}
        <div className="nav">
          <button id="menu-btn" onClick={toggleMenu}>
            <span className="material-icons-sharp">menu</span>
          </button>
          <div className="dark-mode" onClick={toggleDarkMode}>
            <span
              className={`material-icons-sharp active ${!darkMode ? "active" : ""}`}
            >
              light_mode
            </span>
            <span
              className={`material-icons-sharp ${darkMode ? "active" : ""}`}
            >
              dark_mode
            </span>
          </div>

          <div className="profile">
            <div className="info">
              <p>
                Hi, <b>Swathi</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-pic">
              <img src={profile1} alt="" />
            </div>
          </div>
        </div>
        {/* ---End of Nav--- */}

        {/* ---User Profile--- */}
        <div className="user-profile">
          <div className="logo">
            <img src={logo} alt="" />
            <h2>Swathi</h2>
            <p>Fullstack Web Developer</p>
          </div>
        </div>
        {/* ---End of User Profile--- */}

        <div className="reminders">
          <div className="header">
            <h2>Reminders</h2>
            <span className="material-icons-sharp">notifications_none</span>
          </div>

          <div className="notification">
            <div className="icon">
              <span className="material-icons-sharp">volume_up</span>
            </div>
            <div className="content">
              <div className="info">
                <h3>Workshops</h3>
                <small className="text_muted">08:00 AM - 12:00 PM</small>
              </div>
              <span className="material-icons-sharp">more_vert</span>
            </div>
          </div>

          <div className="notification deactive">
            <div className="icon">
              <span className="material-icons-sharp">edit</span>
            </div>
            <div className="content">
              <div className="info">
                <h3>Workshops</h3>
                <small className="text_muted">08:00 AM - 12:00 PM</small>
              </div>
              <span className="material-icons-sharp">more_vert</span>
            </div>
          </div>

          <div className="notification add-reminder">
            <div>
              <span className="material-icons-sharp">add</span>
              <h3>Add Reminder</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
