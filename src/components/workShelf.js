import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';

import sharedStyles from '../shared/sharedStyles';

import ProjectScreenshot from './projectScreenshot';

import reebok1 from '../assets/work/reebok1.jpg';
import buffalo1 from '../assets/work/buffalo7-1.png';
import tigersdrawer1 from '../assets/work/tigersdrawer1.jpg';
import openmarket1 from '../assets/work/openmarket1.jpg';
import drcacao1 from '../assets/work/drcacao1.jpg';
import festivalofyou1 from '../assets/work/festivalofyou1.jpg';
import mercury1 from '../assets/work/mercury1.jpg';

const WorkShelf = () =>
  <section className="diagonal clockwise" style={styles.section}>
    <h2 style={sharedStyles.sectionHeading}>Some Of My Work</h2>

    <div className="container-fluid" style={styles.container}>
      <div className="row no-gutters">
        <div className="col-sm-6">
          <div style={styles.shadowImage}>
            <span style={styles.imageBefore}></span>
            <img src={reebok1} style={styles.featuredImage} />
          </div>
        </div>
        <div className="col-sm-6" style={styles.rightHalf}>
          <h4 className="specialHeading">FEATURED: Reebok Showcase</h4>
          <p style={styles.p}>A presentation designed for a presentation on sexism in sport. The concept evolved from the idea of women ‘breaking’ and ‘tearing’ away from previous stereotypes that have causes their subordination in sports, even in the 21st century.</p>
          <p style={styles.p}>Click the link for more images of the project.</p>
        </div>
      </div>
    </div>

    <div className="container-fluid" style={styles.projectsContainer}>
      <div className="row">
        <div className="col-xs-6 col-sm-4"><Link to="#"><ProjectScreenshot screenshotURL={buffalo1} description="Buffalo 7" /></Link></div>
        <div className="col-xs-6 col-sm-4"><Link to="#"><ProjectScreenshot screenshotURL={tigersdrawer1} description="Menu Design: Federal Caf&eacute;" /></Link></div>
        <div className="clearfix visible-xs-block"></div>
        <div className="col-xs-6 col-sm-4"><Link to="#"><ProjectScreenshot screenshotURL={openmarket1} description="Open Market" /></Link></div>
        <div className="clearfix visible-sm-block visible-md-block"></div>
        <div className="col-xs-6 col-sm-4"><Link to="#"><ProjectScreenshot screenshotURL={drcacao1} description="Dr Cacao" /></Link></div>
        <div className="clearfix visible-xs-block"></div>
        <div className="col-xs-6 col-sm-4"><Link to="#"><ProjectScreenshot screenshotURL={festivalofyou1} description="Festival of You" /></Link></div>
        <div className="col-xs-6 col-sm-4"><Link to="#"><ProjectScreenshot screenshotURL={mercury1} description="Mercury Logistics" /></Link></div>
      </div>
    </div>

    <div style={styles.projectsLink}><Link className="specialHeading" to="/projects/">See all projects</Link></div>


  </section>

var styles = {};

styles.section = {
  background: "white"
}

styles.container = {
  marginTop: "5%",
  padding: 0
}

styles.featureImage = {
  width: "100%",
  position: "relative",
  zIndex: 1
}

styles.shadowImage = {
  position: "relative"
}

styles.imageBefore = {
  position: "absolute",
  width: "102%",
  height: "92%",
  top: "-6%",
  left: 0,
  background: "#a8e4bc",
  zIndex: -1
}

styles.rightHalf = {
  padding: "3% 6%"
}

styles.projectsLink = {
  textAlign: "center",
  marginTop: "3%",
  fontSize: "3vh"
}

styles.p = {
  fontFamily: "Apercu-Regular",
  fontSize: "20px",
  color: "#b2b1b8",
  lineHeight: "1.7"
}

styles.projectsContainer = {

}

export default Radium(WorkShelf);

