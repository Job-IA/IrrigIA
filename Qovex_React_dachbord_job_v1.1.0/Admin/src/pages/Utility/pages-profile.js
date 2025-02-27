import React, { useState } from 'react'
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Card, CardBody, Col, Input, Label, Nav, NavItem, NavLink, Progress, Row, TabContent, TabPane } from 'reactstrap'
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import classnames from "classnames"
import ProfileRevenue from './ProfileRevenue'
import { Link } from 'react-router-dom'

const PagesProfile = () => {
    const [activeTab, setactiveTab] = useState("1")
    function toggle(tab) {
        if (activeTab !== tab) {
            setactiveTab(tab)
        }
    }
    return (
        <React.Fragment>
            <div className='page-content'>
                <Breadcrumbs title="Pages" breadcrumbItem="Profile" />
                <Row>
                    <Col md={12} xl={3}>
                        <Card>
                            <CardBody>
                                <div className="profile-widgets py-3">
                                    <div className="text-center">
                                        <div className="">
                                            <img src={avatar2} alt=""
                                                className="avatar-lg mx-auto img-thumbnail rounded-circle" />
                                            <div className="online-circle"><i className="fas fa-circle text-success"></i>
                                            </div>
                                        </div>

                                        <div className="mt-3 ">
                                            <Link to="#" className="text-reset fw-medium font-size-16">Patrick
                                                Becker</Link>
                                            <p className="text-body mt-1 mb-1">UI/UX Designer</p>

                                            <span className="badge bg-success me-1">Follow Me</span>
                                            <span className="badge bg-danger">Message</span>
                                        </div>

                                        <Row className="mt-4 border border-start-0 border-end-0 p-3">
                                            <Col md={6}>
                                                <h6 className="text-muted">
                                                    Followers
                                                </h6>
                                                <h5 className="mb-0">9,025</h5>
                                            </Col>

                                            <Col md={6}>
                                                <h6 className="text-muted">
                                                    Following
                                                </h6>
                                                <h5 className="mb-0">11,025</h5>
                                            </Col>
                                        </Row>

                                        <div className="mt-4">

                                            <ul className="list-inline social-source-list">
                                                <li className="list-inline-item">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle">
                                                            <i className="mdi mdi-facebook"></i>
                                                        </span>
                                                    </div>
                                                </li>

                                                <li className="list-inline-item">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-info">
                                                            <i className="mdi mdi-twitter"></i>
                                                        </span>
                                                    </div>
                                                </li>

                                                <li className="list-inline-item">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-danger">
                                                            <i className="mdi mdi-google-plus"></i>
                                                        </span>
                                                    </div>
                                                </li>

                                                <li className="list-inline-item">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-pink">
                                                            <i className="mdi mdi-instagram"></i>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <h5 className="card-title mb-3">Personal Information</h5>

                                <p className="card-title-desc">
                                    Hi I'm Patrick Becker, been industry's standard dummy ultrices Cambridge.
                                </p>

                                <div className="mt-3">
                                    <p className="font-size-12 text-muted mb-1">Email Address</p>
                                    <h6 className="">StaceyTLopez@armyspy.com</h6>
                                </div>

                                <div className="mt-3">
                                    <p className="font-size-12 text-muted mb-1">Phone number</p>
                                    <h6 className="">001 951-402-8341</h6>
                                </div>

                                <div className="mt-3">
                                    <p className="font-size-12 text-muted mb-1">Office Address</p>
                                    <h6 className="">2240 Denver Avenue
                                        Los Angeles, CA 90017</h6>
                                </div>

                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h5 className="card-title mb-2">My Top Skills</h5>
                                <p className="text-muted">Suspendisse mattis rutrum orci eu pellentesque. </p>
                                <ul className="list-unstyled list-inline language-skill mb-0">
                                    <li className="list-inline-item badge bg-primary"><span>java</span></li>
                                    <li className="list-inline-item badge bg-primary"><span>Javascript</span></li>
                                    <li className="list-inline-item badge bg-primary"><span>laravel</span></li>
                                    <li className="list-inline-item badge bg-primary"><span>HTML5</span></li>
                                    <li className="list-inline-item badge bg-primary"><span>android</span></li>
                                    <li className="list-inline-item badge bg-primary"><span>zengo</span></li>
                                    <li className="list-inline-item badge bg-primary"><span>python</span></li>
                                    <li className="list-inline-item badge bg-primary"><span>react</span></li>
                                    <li className="list-inline-item badge bg-primary"><span>php</span></li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={12} xl={9}>
                        <Row>
                            <Col md={12} xl={4}>
                                <Card>
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <div className="col-8">
                                                <p className="mb-2">Completed Projects</p>
                                                <h4 className="mb-0">3,524</h4>
                                            </div>
                                            <div className="col-4">
                                                <div className="text-end">
                                                    <div>
                                                        2.06 % <i className="mdi mdi-arrow-up text-success ml-1"></i>
                                                    </div>
                                                    <Progress color='primary' className="progress-sm mt-3" value={62} />
                                                </div>
                                            </div>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md={12} xl={4}>
                                <Card>
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <div className="col-8">
                                                <p className="mb-2">Pending Projects</p>
                                                <h4 className="mb-0">5,362</h4>
                                            </div>
                                            <div className="col-4">
                                                <div className="text-end">
                                                    <div>
                                                        3.12 % <i className="mdi mdi-arrow-up text-success ms-1"></i>
                                                    </div>
                                                    <Progress color='warning' className="progress-sm mt-3" value={78} />
                                                </div>
                                            </div>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md={12} xl={4}>
                                <Card>
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <div className="col-8">
                                                <p className="mb-2">Total Revenue</p>
                                                <h4 className="mb-0">6,245</h4>
                                            </div>
                                            <div className="col-4">
                                                <div className="text-end">
                                                    <div>
                                                        2.12 % <i className="mdi mdi-arrow-up text-success ml-1"></i>
                                                    </div>
                                                    <Progress color='success' className="progress-sm mt-3" value={75} />
                                                </div>
                                            </div>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Card>
                            <CardBody>

                                <Nav tabs className="nav-tabs nav-tabs-custom nav-justified" role="tablist">
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab === "1",
                                            })}
                                            onClick={() => {
                                                toggle("1")
                                            }}>
                                            <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                            <span className="d-none d-sm-block">Experience</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab === "2",
                                            })}
                                            onClick={() => {
                                                toggle("2")
                                            }}>
                                            <span className="d-none d-sm-block">Revenue</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab === "3",
                                            })}
                                            onClick={() => {
                                                toggle("3")
                                            }}>
                                            <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                            <span className="d-none d-sm-block">Settings</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>


                                <TabContent activeTab={activeTab} className="p-3 text-muted">
                                    <TabPane tabId="1">
                                        <div className="timeline-count mt-5">
                                            <Row>
                                                <div className="timeline-box col-lg-4">
                                                    <div className="mb-5 mb-lg-0">
                                                        <div className="item-lable bg-primary rounded">
                                                            <p className="text-center text-white">2016 - 20</p>
                                                        </div>
                                                        <div className="timeline-line active">
                                                            <div className="dot bg-primary"></div>
                                                        </div>
                                                        <div className="vertical-line">
                                                            <div className="wrapper-line bg-light"></div>
                                                        </div>
                                                        <div className="bg-light p-4 rounded mx-3">
                                                            <h5>Back end Developer</h5>
                                                            <p className="text-muted mt-1 mb-0">Voluptatem accntium
                                                                doemque lantium, totam rem aperiam, eaque ipsa quae
                                                                ab illo quasi sunt explicabo.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="timeline-box col-lg-4">
                                                    <div className="mb-5 mb-lg-0">
                                                        <div className="item-lable bg-primary rounded">
                                                            <p className="text-center text-white">2013 - 16</p>
                                                        </div>
                                                        <div className="timeline-line active">
                                                            <div className="dot bg-primary"></div>
                                                        </div>
                                                        <div className="vertical-line">
                                                            <div className="wrapper-line bg-light"></div>
                                                        </div>
                                                        <div className="bg-light p-4 rounded mx-3">
                                                            <h5>Front end Developer</h5>
                                                            <p className="text-muted mt-1 mb-0">Vivamus ultrices massa
                                                                tellus, sed convallis urna interdum eu. Pellentesque
                                                                htant morbi varius mollis et quis nisi.</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="timeline-box col-lg-4">
                                                    <div className="mb-5 mb-lg-0">
                                                        <div className="item-lable bg-primary rounded">
                                                            <p className="text-center text-white">2011 - 13</p>
                                                        </div>
                                                        <div className="timeline-line active">
                                                            <div className="dot bg-primary"></div>
                                                        </div>
                                                        <div className="vertical-line">
                                                            <div className="wrapper-line bg-light"></div>
                                                        </div>
                                                        <div className="bg-light p-4 rounded mx-3">
                                                            <h5>UI /UX Designer</h5>
                                                            <p className="text-muted mt-1 mb-0">Suspendisse potenti.
                                                                senec netus malesuada fames ac turpis egesta vitae
                                                                blandit ac tempus nulla.</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        </div>
                                    </TabPane>


                                    <TabPane tabId="2" id="revenue" role="tabpanel">
                                        <ProfileRevenue />
                                    </TabPane>

                                    <TabPane tabId="3" id="settings" role="tabpanel">

                                        <Row className="mt-4">
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Label className="form-label" for="firstname">First Name</Label>
                                                    <Input type="text" className="form-control" id="firstname"
                                                        placeholder="Enter first name" />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Label className="form-label" for="lastname">Last Name</Label>
                                                    <Input type="text" className="form-control" id="lastname"
                                                        placeholder="Enter last name" />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <Label className="form-label" for="userbio">Bio</Label>
                                                    <textarea className="form-control" id="userbio" rows="4"
                                                        placeholder="Write something..."></textarea>
                                                </div>
                                            </div>
                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <div className="mb-0">
                                                    <Label className="form-label" for="useremail">Email Address</Label>
                                                    <input type="email" className="form-control" id="useremail"
                                                        placeholder="Enter email" />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="mb-0">
                                                    <Label className="form-label" for="userpassword">Password</Label>
                                                    <input type="password" className="form-control" id="userpassword"
                                                        placeholder="Enter password" />
                                                </div>
                                            </Col>
                                        </Row>


                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Projects</h4>

                                <div className="table-responsive">
                                    <table className="table table-centered mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Projects</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Billing Name</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col" colSpan={2}>Payment Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Qovex admin UI</td>
                                                <td>
                                                    21/01/2020
                                                </td>
                                                <td>Werner Berlin</td>
                                                <td>$ 125</td>
                                                <td><span className="badge badge-soft-success font-size-12">Paid</span>
                                                </td>
                                                <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Qovex admin Logo
                                                </td>
                                                <td>16/01/2020</td>

                                                <td>Robert Jordan</td>
                                                <td>$ 118</td>
                                                <td><span className="badge bg-danger-subtle text-danger font-size-12">Chargeback</span>
                                                </td>
                                                <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Redesign - Landing page
                                                </td>
                                                <td>17/01/2020</td>

                                                <td>Daniel Finch</td>
                                                <td>$ 115</td>
                                                <td><span className="badge badge-soft-success font-size-12">Paid</span>
                                                </td>
                                                <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Blog Template
                                                </td>
                                                <td>18/01/2020</td>

                                                <td>James Hawkins</td>
                                                <td>$ 121</td>
                                                <td><span className="badge bg-warning-subtle text-warning  font-size-12">Refund</span>
                                                </td>
                                                <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3">
                                    <ul className="pagination pagination-rounded justify-content-center mb-0">
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item active"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default PagesProfile
