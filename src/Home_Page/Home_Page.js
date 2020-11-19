import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home_page.scss';
import { Button, Card, CardColumns, Col, Container, Image, Row } from 'react-bootstrap';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { FooterMain } from '../Footer/FooterMain';
import { Navbar } from '../Navbar/Navbar';

import AOS from 'aos'
import "aos/dist/aos.css";


export const Home_Page = () => {

    AOS.init({
        duration: 1000
    })

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const [mob, setMob] = useState({
        mobile: ""
    })

    const { mobile } = mob;


    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 250) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 250) {
            setShowScroll(false)
        }
    };

    // const scrollTop = () => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div>
            <Navbar />
            {/* <Container  >
            <div className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}> 
            <div className="Navbary">
        <Navbar bg="light" expand="lg" >
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
</div>
        </Container> */}
            <div className="top-bg">



                <Carousel >
                    <Carousel.Item interval={2000} className="container1">

                        <div className="full-screen">

                            <img
                                className="full-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/bakery.webp"}
                                alt="First slide"
                            />
                        </div>
                        <div className="mobile-screen">
                            <img
                                className="mobile-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/mobile/new_bakery.webp"}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className="carousel-caption">
                            {/* <h3 className="captions">First slide label</h3> */}
                            <Button className="button1">Shop Now</Button>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>


                        <Container className="hiding">
                            <div className="top-right">
                                <p className="brand-name">OkkeyMart</p>
                                <p className="brand-down"> Shop bakery goods in a few clicks </p>
                                <p className="deliver">delivered to your door</p>
                                <p className="try">Try it out today! </p>
                                <Button className="button1">Shop Now</Button>
                            </div>
                        </Container>
                    </Carousel.Item>


                    <Carousel.Item interval={2000} className="container1">
                        <div>
                            <img
                                className="full-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/butchery.webp"}
                                alt="First slide"
                            />
                        </div>
                        <div className="mobile-screen">
                            <img
                                className="mobile-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/mobile/new_butchery.webp"}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className="carousel-caption">
                            {/* <h3 className="captions">Second slide label</h3> */}
                            <Button className="button2">Shop Now</Button>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>



                        <div className="top-right">
                            <p className="brand-name">OkkeyMart</p>
                            <p className="brand-down"> Shop bakery goods in a few clicks </p>
                            <p className="deliver">delivered to your door</p>
                            <p className="try">Try it out today! </p>
                            <Button className="button2">Shop Now</Button>
                        </div>


                    </Carousel.Item>


                    <Carousel.Item interval={2000} className="container1">
                        <div>
                            <img
                                className="full-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/cakesAndDesserts.webp"}
                                alt="Second slide"
                            />
                        </div>
                        <div className="mobile-screen">
                            <img
                                className="mobile-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/mobile/new_cakesAndDesserts.webp"}
                                alt="Second slide"
                            />
                        </div>
                        <Carousel.Caption className="carousel-caption">
                            {/* <h3 className="captions">Third slide label</h3> */}
                            <Button className="button3">Shop Now</Button>
                            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>



                        <div className="top-right">
                            <p className="brand-name">OkkeyMart</p>
                            <p className="brand-down"> Shop bakery goods in a few clicks </p>
                            <p className="deliver">delivered to your door</p>
                            <p className="try">Try it out today! </p>
                            <Button className="button3">Shop Now</Button>

                        </div>


                    </Carousel.Item>


                    <Carousel.Item interval={2000} className="container1">
                        <div>
                            <img
                                className="full-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/coffeeCapsMachines.webp"}
                                alt="First slide"
                            />
                        </div>
                        <div className="mobile-screen">
                            <img
                                className="mobile-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/mobile/new_coffeeCapsMachines.webp"}
                                alt="First slide"
                            />
                        </div>

                        <Carousel.Caption className="carousel-caption">
                            {/* <h3 className="captions">First slide label</h3> */}
                            <Button className="button4">Shop Now</Button>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>



                        <div className="top-right">
                            <p className="brand-name">OkkeyMart</p>
                            <p className="brand-down"> Shop bakery goods in a few clicks </p>
                            <p className="deliver">delivered to your door</p>
                            <p className="try">Try it out today! </p>
                            <Button className="button4">Shop Now</Button>

                        </div>

                    </Carousel.Item>


                    <Carousel.Item interval={2000} className="container1">
                        <div>
                            <img
                                className="full-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/fruitsAndVegetables.webp"}
                                alt="Third slide"
                            />
                        </div>
                        <div className="mobile-screen">
                            <img
                                className="mobile-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/mobile/new_fruitsAndVegetables.webp"}
                                alt="Third slide"
                            />
                        </div>
                        <Carousel.Caption className="carousel-caption">
                            {/* <h3 className="captions">First slide label</h3> */}
                            <Button className="button5">Shop Now</Button>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>



                        <div className="top-right">
                            <p className="brand-name">OkkeyMart</p>
                            <p className="brand-down"> Shop bakery goods in a few clicks </p>
                            <p className="deliver">delivered to your door</p>
                            <p className="try">Try it out today! </p>
                            <Button className="button5">Shop Now</Button>

                        </div>


                    </Carousel.Item>


                    <Carousel.Item interval={2000} className="container1">
                        <div>
                            <img
                                className="full-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/homeImprovements.webp"}
                                alt="First slide"
                            />
                        </div>
                        <div className="mobile-screen">
                            <img
                                className="mobile-screen w-100"
                                src={process.env.PUBLIC_URL + "/images/homepage/top/mobile/new_homeImprovements.webp"}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className="carousel-caption">
                            {/* <h3 className="captions">First slide label</h3> */}
                            <Button className="button6">Shop Now</Button>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>



                        <div className="top-right">
                            <p className="brand-name">OkkeyMart</p>
                            <p className="brand-down"> Shop bakery goods in a few clicks </p>
                            <p className="deliver">delivered to your door</p>
                            <p className="try">Try it out today! </p>
                            <Button className="button6">Shop Now</Button>
                        </div>


                    </Carousel.Item>

                </Carousel>

            </div>

            {/* -------------------------Cards ---------------------------- */}

            <div className="background">
                <div className="text-center">
                    <p className="select-service">Select a service</p>
                </div>

                <div className="cards-start">
                    <Container>
                        <CardColumns>


                            <Card className="cardy ">
                                <div className="image-box">
                                    <Card.Img variant="top"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cards/bakery.webp"} />
                                </div>
                                {/* <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                                    </Card.Text>
                                </Card.Body> */}
                                <Card.Footer className="card-foot-color text-center">
                                    <small className="card-footer-font ">Supermarkets</small>
                                </Card.Footer>
                            </Card>

                            <Card className="cardy">
                                <div className="image-box">
                                    <Card.Img variant="top"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cards/petshop.webp"} />
                                </div>
                                <Card.Footer className="card-foot-color text-center">
                                    <small className="card-footer-font ">Supermarkets</small>
                                </Card.Footer>
                            </Card>

                            <Card className="cardy">
                                <div className="image-box">
                                    <Card.Img variant="top"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cards/bakery (1).webp"} />
                                </div>
                                <Card.Footer className="card-foot-color text-center">
                                    <small className="card-footer-font ">Supermarkets</small>
                                </Card.Footer>
                            </Card>

                            <Card className="cardy">
                                <div className="image-box">
                                    <Card.Img variant="top"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cards/butchery.webp"} />
                                </div>
                                <Card.Footer className="card-foot-color text-center">
                                    <small className="card-footer-font ">Supermarkets</small>
                                </Card.Footer>
                            </Card>

                            <Card className="cardy">
                                <div className="image-box">
                                    <Card.Img variant="top"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cards/coffeeCapsMachines.webp"} />
                                </div>
                                <Card.Footer className="card-foot-color text-center">
                                    <small className="card-footer-font ">Supermarkets</small>
                                </Card.Footer>
                            </Card>

                            <Card className="cardy">
                                <div className="image-box">
                                    <Card.Img variant="top"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cards/homeImprovements.webp"} />
                                </div>
                                <Card.Footer className="card-foot-color text-center">
                                    <small className="card-footer-font ">Supermarkets</small>
                                </Card.Footer>
                            </Card>

                            <Card className="cardy">
                                <div className="image-box">
                                    <Card.Img variant="top"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cards/cakesAndDesserts.webp"} />
                                </div>
                                <Card.Footer className="card-foot-color text-center">
                                    <small className="card-footer-font ">Supermarkets</small>
                                </Card.Footer>
                            </Card>

                            <Card className="cardy">
                                <div className="image-box">
                                    <Card.Img variant="top"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cards/fruitsAndVegetables.webp"} />
                                </div>
                                <Card.Footer className="card-foot-color text-center">
                                    <small className="card-footer-font ">Supermarkets</small>
                                </Card.Footer>
                            </Card>

                            <Card className="cardy">
                                <div className="image-box">
                                    <Card.Img variant="top"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cards/organic.webp"} />
                                </div>
                                <Card.Footer className="card-foot-color text-center">
                                    <small className="card-footer-font ">Supermarkets</small>
                                </Card.Footer>
                            </Card>

                        </CardColumns>

                        <Container className="mt-3 text-center">
                            <h2 className="text-dark">Save time and energy</h2>
                            <h4 className="text-dark">Download the app & sit back, we'll handel the rest</h4>

                        </Container>
                    </Container>

                </div>
            </div>

            {/* ------------------------------------------------------------------ */}
          

            {/* ------------------------ App -------------------------------------- */}

            <div className="text-muted">


                <Container>

                    <div _ngcontent-yvh-c59="" className="row align-items-center align-content-center justify-content-center ng-star-inserted mt-5">
                        <div _ngcontent-yvh-c59="" className="col-12 col-lg-3 order-2 benefits app-fullscreen">



                            <div _ngcontent-ocy-c59="" class="benefit d-flex mb-5 pt-md-5 align-content-center align-items-center justify-content-md-start ng-star-inserted"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                <img _ngcontent-ocy-c59="" class="icon ls-is-cached lazyloaded"
                                    style={{ height: "101", width: 101 }}
                                    src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-01.svg"}
                                    alt="Wide variety of products" />

                                <div _ngcontent-ocy-c59="" class="icontext ml-4">
                                    Wide variety of products
                            </div>
                            </div>


                            <div _ngcontent-ocy-c59="" class="benefit d-flex mb-5 pt-md-5 align-content-center align-items-center justify-content-md-start ng-star-inserted"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                <img _ngcontent-ocy-c59="" class="icon ls-is-cached lazyloaded"
                                    style={{ height: "101", width: 101 }}
                                    src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-08.svg"}
                                    alt="Easy to use, order within 3 clicks" />

                                <div _ngcontent-ocy-c59="" class="icontext ml-4">
                                    Easy to use, order within 3 clicks
                            </div>
                            </div>

                            <div _ngcontent-ocy-c59="" class="benefit d-flex mb-5 pt-md-5 align-content-center align-items-center justify-content-md-start ng-star-inserted"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                <img _ngcontent-ocy-c59="" class="icon ls-is-cached lazyloaded"
                                    style={{ height: "101", width: 101 }}
                                    src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-04.svg"}
                                    alt="Re-order easy and fast
                                    through your favorites" />

                                <div _ngcontent-ocy-c59="" class="icontext ml-4">
                                    Re-order easy and fast through your favorites
                            </div>
                            </div>

                        </div>


                        <div _ngcontent-yvh-c59="" className="Chrome Linux col-12 col-lg-5 order-1 order-lg-2 phones">

                        </div>


                        <div _ngcontent-yvh-c59="" className="col-12 col-lg-3 order-lg-3 order-3 benefits app-fullscreen">


                            <div _ngcontent-yvh-c59="" className="benefit d-flex mb-5 pt-md-5 align-content-center align-items-center justify-content-lg-end ng-star-inserted"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                <div _ngcontent-yvh-c59="" className="icontext text-md-right mr-4 order-2 order-lg-1 ml-md-4">
                                    Delivery in about 30 to 60 minutes
                                    </div>
                                <img _ngcontent-yvh-c59="" className="icon order-1 order-lg-2 ls-is-cached lazyloaded "
                                    style={{ height: "101", width: 101 }}
                                    src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-09.svg"}
                                    alt="Delivery in about 30 to 60 minutes depending on location" />
                            </div>


                            <div _ngcontent-yvh-c59="" className="benefit d-flex mb-5 pt-md-5 align-content-center align-items-center justify-content-lg-end ng-star-inserted"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                <div _ngcontent-yvh-c59="" className="icontext text-md-right mr-4 order-2 order-lg-1 ml-md-4">
                                    Pay by cash or credit card
                                    </div>
                                <img _ngcontent-yvh-c59="" className="icon order-1 order-lg-2 ls-is-cached lazyloaded"
                                    style={{ height: "101", width: 101 }}
                                    src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-02.svg"}
                                    alt="Pay by cash or credit card" />
                            </div>


                            <div _ngcontent-yvh-c59="" className="benefit d-flex mb-5 pt-md-5 align-content-center align-items-center justify-content-lg-end ng-star-inserted"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                <div _ngcontent-yvh-c59="" className="icontext text-md-right mr-4 order-2 order-lg-1 ml-md-4">
                                    Scheduled delivery
                                    </div>
                                <img _ngcontent-yvh-c59="" className="icon order-1 order-lg-2 ls-is-cached lazyloaded"
                                    style={{ height: "101", width: 101 }}
                                    src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-05.svg"}
                                    alt="Scheduled delivery" />
                            </div>

                        </div>

                    </div>
                    {/* <div _ngcontent-yvh-c59="" className="benefit d-flex mb-5 pt-md-5 align-content-center align-items-center justify-content-lg-end ng-star-inserted">
                                <div _ngcontent-yvh-c59="" className="icontext text-md-right mr-4 order-2 order-lg-1 ml-md-4">
                                    Pay by cash or credit card
                                    </div>
                                <img _ngcontent-yvh-c59="" className="icon order-1 order-lg-2 ls-is-cached lazyloaded"
                                    src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-08.svg"}
                                    alt="Pay by cash or credit card" />
                            </div> */}



                    <div className="app-mobile">
                        <div _ngcontent-ccd-c59="" className="col-10 col-lg-3 order-2 benefits d-flex text-center m-auto ">
                            <Row className="d-flex m-auto text-center">
                                <div _ngcontent-ccd-c59="" className="benefit d-block text-center mb-5 pt-5 w-50 ng-star-inserted marty pr-3 "
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                    <img _ngcontent-ocy-c59="" className="icon ls-is-cached lazyloaded"
                                        style={{ height: "101", width: 101 }}
                                        src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-01.svg"}
                                        alt="Wide variety of products" />
                                    <div _ngcontent-ccd-c59="" className="icontext d-block text-center">Wide variety of products</div>
                                </div>
                                <div _ngcontent-ccd-c59="" className="benefit d-block text-center mb-5 pt-5 w-50 ng-star-inserted marty"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                    <img _ngcontent-ocy-c59="" className="icon ls-is-cached lazyloaded"
                                        style={{ height: "101", width: 101 }}
                                        src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-08.svg"}
                                        alt="Easy to use, order within 3 clicks" />
                                    <div _ngcontent-ccd-c59="" className="icontext d-block text-center">Easy to use, order within 3 clicks</div>
                                </div><div _ngcontent-ccd-c59="" className="benefit d-block text-center mb-5 pt-5 w-50 ng-star-inserted marty pr-3"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                    <img _ngcontent-ocy-c59="" className="icon ls-is-cached lazyloaded"
                                        style={{ height: "101", width: 101 }}
                                        src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-04.svg"}
                                        alt="Re-order easy and fast
                                    through your favorites" />
                                    <div _ngcontent-ccd-c59="" className="icontext d-block text-center">Re-order easy and fast through your favorites</div>
                                </div>
                                <div _ngcontent-ccd-c59="" className="benefit d-block text-center mb-5 pt-5 w-50 ng-star-inserted marty"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                    <img _ngcontent-yvh-c59="" className="icon order-1 order-lg-2 ls-is-cached lazyloaded "
                                        style={{ height: "101", width: 101 }}
                                        src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-09.svg"}
                                        alt="Delivery in about 30 to 60 minutes depending on location" />
                                    <div _ngcontent-ccd-c59="" className="icontext d-block text-center">Delivery in about 30 to 60 minutesdepending on location</div>
                                </div>
                                <div _ngcontent-ccd-c59="" className="benefit d-block text-center mb-5 pt-5 w-50 ng-star-inserted marty pr-3"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                    <img _ngcontent-yvh-c59="" className="icon order-1 order-lg-2 ls-is-cached lazyloaded"
                                        style={{ height: "101", width: 101 }}
                                        src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-02.svg"}
                                        alt="Pay by cash or credit card" />
                                    <div _ngcontent-ccd-c59="" className="icontext d-block text-center">Pay by cash or credit card</div>
                                </div>
                                <div _ngcontent-ccd-c59="" className="benefit d-block text-center mb-5 pt-5 w-50 ng-star-inserted marty"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">
                                    <img _ngcontent-yvh-c59="" className="icon order-1 order-lg-2 ls-is-cached lazyloaded"
                                        style={{ height: "101", width: 101 }}
                                        src={process.env.PUBLIC_URL + "/images/homepage/icons/icons-source-05.svg"}
                                        alt="Scheduled delivery" />
                                    <div _ngcontent-ccd-c59="" className="icontext d-block text-center">Scheduled delivery</div>
                                </div>

                            </Row>
                        </div>
                    </div>
                </Container>


            </div>
            <Container className="text-center mt-5">
                <h3 className="mb-4 text-dark">Try it out today!</h3>
                <Button className="shop-now-btn">Shop now</Button>
                <div>
                    <Image className=""
                        style={{ width: 150, height: 200 }}
                        src={process.env.PUBLIC_URL + "/images/homepage/icons/Hand_Clicking.svg"}></Image>
                </div>
            </Container>

            <div className="learn-more">
                <Container className="text-center">
                    <h3 className="text-dark">Learn More</h3>

                </Container>


                <div className="conti-columns d-flex ">
                    <Container fluid >
                        <Row className="m-auto d-flex ">
                            <Col xs={12} md={5} className="columns-1 m-3 "
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0">
                                <div style={{ height: 135 }} className="">
                                    <Col className="spelling" >
                                        <h5>Learn more about groccery</h5>
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={12} md={5} className="columns-2 m-3"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0">
                                <div style={{ height: 135 }}>
                                    <Col className="spelling">
                                        <h5>Learn more about Butchery & BBQ</h5>
                                    </Col>
                                </div>
                            </Col>
                        </Row>

                        <Row className="m-auto d-flex">
                            <Col xs={12} md={5} className="columns-3 m-3"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0">
                                <div style={{ height: 135 }}>
                                    <Col className="spelling">
                                        <h5>Learn more about Bakeries</h5>
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={12} md={5} className="columns-4 m-3"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0">
                                <div style={{ height: 135 }}>
                                    <Col className="spelling">
                                        <h5>Learn more about Cakes & Deserts</h5>
                                    </Col>
                                </div>
                            </Col>
                        </Row>

                        <Row className="m-auto d-flex">
                            <Col xs={12} md={5} className="columns-5 m-3"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0">
                                <div style={{ height: 135 }}>
                                    <Col className="spelling">
                                        <h5>Learn more about Coffee & Tea Corner</h5>
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={12} md={5} className="columns-6 m-3"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0">
                                <div style={{ height: 135 }}>
                                    <Col className="spelling">
                                        <h5>Learn more about Fresh Products</h5>
                                    </Col>
                                </div>
                            </Col>
                        </Row>

                        <Row className="m-auto d-flex">
                            <Col xs={12} md={5} className="columns-7 m-3"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0">
                                <div style={{ height: 135 }}>
                                    <Col className="spelling">
                                        <h5>Learn more about Home Improvements</h5>
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={12} md={5} className="columns-8 m-3"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0">
                                <div style={{ height: 135 }}>
                                    <Col className="spelling">
                                        <h5>Learn more about Flowers</h5>
                                    </Col>
                                </div>
                            </Col>
                        </Row>


                    </Container>
                </div>
            </div>

            <div>

                <Container fluid className="conti-cities">
                    <h3 className="where-we text-center">Where are we:</h3>

                    {/* ----------------------------------------- 3 Frames ------------------------------------------ */}
                    <Carousel className="rotating-cities" indicators={false}>
                        <Carousel.Item interval={1000}>
                            <Row className="m-auto d-flex ">
                                <Col xs={6} md={4}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum1.jpg"} roundedCircle />
                                    <p className="city-spell">Mumbai</p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum2.jpg"} roundedCircle />
                                    <p className="city-spell">Pune</p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum3.jpg"} roundedCircle />
                                    <p className="city-spell">Delhi</p>
                                </Col>
                            </Row>
                            <Carousel.Caption>


                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <Row className="m-auto d-flex ">
                                <Col xs={6} md={4}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum4.jpg"} roundedCircle />
                                    <p className="city-spell">Banglore</p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum5.jpg"} roundedCircle />
                                    <p className="city-spell">Kolkata</p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum6.jpg"} roundedCircle />
                                    <p className="city-spell">Thane</p>
                                </Col>
                            </Row>
                            <Carousel.Caption>


                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    {/* ---------------------------------------------- */}

                    <div className="steady-cities">
                        <Row className="steady-cities m-auto d-flex ">
                            <Col xs={6} md={2}>
                                <Image style={{ height: 150, width: 150 }}
                                    className="city-image"
                                    src={process.env.PUBLIC_URL + "/images/homepage/cities/mum1.jpg"} roundedCircle />
                                <p className="city-spell">Mumbai</p>
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ height: 150, width: 150 }}
                                    className="city-image"
                                    src={process.env.PUBLIC_URL + "/images/homepage/cities/mum2.jpg"} roundedCircle />
                                <p className="city-spell">Pune</p>
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ height: 150, width: 150 }}
                                    className="city-image"
                                    src={process.env.PUBLIC_URL + "/images/homepage/cities/mum3.jpg"} roundedCircle />
                                <p className="city-spell">Delhi</p>
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ height: 150, width: 150 }}
                                    className="city-image"
                                    src={process.env.PUBLIC_URL + "/images/homepage/cities/mum4.jpg"} roundedCircle />
                                <p className="city-spell">Banglore</p>
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ height: 150, width: 150 }}
                                    className="city-image"
                                    src={process.env.PUBLIC_URL + "/images/homepage/cities/mum5.jpg"} roundedCircle />
                                <p className="city-spell">Kolkata</p>
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ height: 150, width: 150 }}
                                    className="city-image"
                                    src={process.env.PUBLIC_URL + "/images/homepage/cities/mum6.jpg"} roundedCircle />
                                <p className="city-spell">Thane</p>
                            </Col>
                        </Row>
                    </div>

                    {/* ------------------------------------ */}

                    {/* -------------------------- 1 Frame ------------------------------ */}

                    <Carousel className="rotating-cities-single" indicators={false}>
                        <Carousel.Item interval={1000}>
                            <Row className="m-auto d-flex ">
                                <Col xs={6} md={6}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum1.jpg"} roundedCircle />
                                    <p className="city-spell">Mumbai</p>
                                </Col>
                            </Row>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={1000}>
                            <Row className="m-auto d-flex ">
                                <Col xs={6} md={6}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum2.jpg"} roundedCircle />
                                    <p className="city-spell">Pune</p>
                                </Col>
                            </Row>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={1000}>
                            <Row className="m-auto d-flex ">
                                <Col xs={6} md={6}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum3.jpg"} roundedCircle />
                                    <p className="city-spell">Delhi</p>
                                </Col>
                            </Row>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={500}>
                            <Row className="m-auto d-flex ">
                                <Col xs={6} md={6}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum4.jpg"} roundedCircle />
                                    <p className="city-spell">Banglore</p>
                                </Col>
                            </Row>
                            <Carousel.Caption>


                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={500}>
                            <Row className="m-auto d-flex ">
                                <Col xs={6} md={6}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum5.jpg"} roundedCircle />
                                    <p className="city-spell">Kolkata</p>
                                </Col>
                            </Row>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item interval={500}>
                            <Row className="m-auto d-flex ">
                                <Col xs={6} md={6}>
                                    <Image style={{ height: 150, width: 150 }}
                                        className="city-image"
                                        src={process.env.PUBLIC_URL + "/images/homepage/cities/mum6.jpg"} roundedCircle />
                                    <p className="city-spell">Thane</p>
                                </Col>
                            </Row>
                            <Carousel.Caption>


                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    {/* --------------------------------------------------------- */}
                </Container>
                {/* --------------------------- */}

                <div >
                    <Container className="interested-conti">
                        <h2 className="interested-spell text-center">Are you a shop owner?</h2>
                        <h2 className="interested-spell text-center mt-3">Interested in joining our exclusive network?</h2>
                        <div className="text-center">
                            <Button className="interested-button ">Partner with us</Button>
                        </div>

                        <div _ngcontent-ccd-c65="" class="row text-dark interested-row">
                            <div _ngcontent-ccd-c65="" class="col-12 col-md-4 mb-3 mb-sm-0 ng-star-inserted">
                                <div _ngcontent-ccd-c65="" class="d-flex align-content-center align-items-center justify-content-center">
                                    <div _ngcontent-ccd-c65="" class="pr-4">
                                        <div _ngcontent-ccd-c65="" class="customers partnericon"
                                        data-aos="fade-zoom-in"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay="100"
                                        data-aos-offset="0">
                                            <img _ngcontent-yvh-c59="" className="icon order-1 order-lg-2 ls-is-cached lazyloaded "
                                                style={{ height: "101", width: 101 }}
                                                src={process.env.PUBLIC_URL + "/images/homepage/interested/icons-source-06.860fba077d8a8595998a.svg"}
                                                alt="Delivery in about 30 to 60 minutes depending on location" />
                                        </div>
                                    </div>
                                    <div _ngcontent-ccd-c65="" class="partnertitle font-weight-bold"
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="100"
                                    data-aos-offset="0">
                                        Join the tech era and <br></br>reach thousands of <br></br>customers
                                         </div>
                                </div>
                            </div>
                            <div _ngcontent-ccd-c65="" class="col-12 col-md-4 mb-3 mb-sm-0 ng-star-inserted">
                                <div _ngcontent-ccd-c65="" class="d-flex align-content-center align-items-center justify-content-center">
                                    <div _ngcontent-ccd-c65="" class="pr-4"><div _ngcontent-ccd-c65="" class="partnericon sales"
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="100"
                                    data-aos-offset="0">

                                        <img _ngcontent-yvh-c59="" className="icon order-1 order-lg-2 ls-is-cached lazyloaded "
                                            style={{ height: "101", width: 101 }}
                                            src={process.env.PUBLIC_URL + "/images/homepage/interested/icons-source-07.d49fdd8204d51eb55802.svg"}
                                            alt="Delivery in about 30 to 60 minutes depending on location" />
                                    </div>
                                    </div>
                                    <div _ngcontent-ccd-c65="" class="partnertitle font-weight-bold"
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="100"
                                    data-aos-offset="0">
                                        Increase your sales
                                        </div>
                                </div>
                            </div>

                            <div _ngcontent-ccd-c65="" class="col-12 col-md-4 mb-3 mb-sm-0 ng-star-inserted">
                                <div _ngcontent-ccd-c65="" class="d-flex align-content-center align-items-center justify-content-center">
                                    <div _ngcontent-ccd-c65="" class="pr-4"><div _ngcontent-ccd-c65="" class="partnericon procedures"
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="100"
                                    data-aos-offset="0">
                                        <img _ngcontent-yvh-c59="" className="icon order-1 order-lg-2 ls-is-cached lazyloaded "
                                            style={{ height: "101", width: 101 }}
                                            src={process.env.PUBLIC_URL + "/images/homepage/interested/icons-source-03.53767a6a67190e37c745.svg"}
                                            alt="Delivery in about 30 to 60 minutes depending on location" />
                                    </div>
                                    </div>
                                    <div _ngcontent-ccd-c65="" class="partnertitle font-weight-bold"
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="100"
                                    data-aos-offset="0">
                                        Automate and <br />organise all of your <br />procedures
                                         </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* ----------------- Parallax ------------------------------ */}

                <div className="parallax">
                    <div className="m-auto">
                        <Container className="parallel-conti">
                            <h2 className="parallel-spell d-block">Everything you need in just a few clicks!</h2>


                            <div className="phone-form text-center mt-4">
                                <PhoneInput
                                    inputProps={{
                                        name: "mobile",
                                    }}
                                    country={'in'}
                                    value={mobile}
                                    onChange={mobile => setMob({ mobile })}
                                />



                            </div>
                        </Container>

                    </div>
                </div>

                {/* ----------------------------------------------------------------- */}



            </div>
            <FooterMain />
        </div>
    )
}

export default Home_Page;