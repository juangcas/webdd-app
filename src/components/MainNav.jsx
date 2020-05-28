import React from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SrvTabs from "./Servtabs";
import AspAcco from "./AspAcor";
import PrjsTable from "./Prjstabl";
import ContactForm from "./Contform";
import { IconButton, Toolbar, List, ListItem } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  langs: {
    marginLeft: "auto",
  },
  photo: {
    display: "block",
    width: "100%",
  },
  img: {
    float: "left",
    width: "128px",
    height: "160px",
    margin: "20px",
  },
  clearfix: {
    float: "none",
    clear: "both",
  },
}));

class SocialMedia {
  constructor(id, href, icon) {
    this.id = id;
    this.href = href;
    this.icon = icon;
  }
}

const medias = [
  new SocialMedia(0, "https://twitter.com/JuanGaCasR", <TwitterIcon />),
  new SocialMedia(
    1,
    "https://www.facebook.com/JuanGCasWEBdd",
    <FacebookIcon />
  ),
  new SocialMedia(2, "https://www.instagram.com/juangcas", <InstagramIcon />),
  new SocialMedia(3, "https://www.linkedin.com/in/juangcas", <LinkedInIcon />),
];

class Language {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }
}

const langs = [new Language("es", "Español"), new Language("en", "English")];

export default function MainNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab
            label={t("home.titles.title")}
            href="/home"
            icon={<HomeIcon />}
            {...a11yProps(0)}
          />
          <LinkTab
            label={t("about.titles.title")}
            href="/about"
            icon={<PersonIcon />}
            {...a11yProps(1)}
          />
          <LinkTab
            label={t("projects.titles.title")}
            href="/projects"
            icon={<DashboardIcon />}
            {...a11yProps(2)}
          />
          <LinkTab
            label={t("contact.titles.title")}
            href="/contact"
            icon={<EmailIcon />}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2>{t("home.titles.title")}</h2>
        <p>{t("home.titles.intro")}</p>
        <SrvTabs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.photo}>
          <img
            className={classes.img}
            alt="Me"
            src="g
          
          foto.png"
          />
          <h2>{t("about.titles.title")}</h2>
          <p>{t("about.titles.intro")}</p>
        </div>
        <div className={classes.clearfix} />
        <AspAcco />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>{t("projects.titles.title")}</h2>
        <p>{t("projects.titles.intro")}</p>
        <PrjsTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2>{t("contact.titles.title")}</h2>
        <p>{t("contact.titles.intro")}</p>
        <ContactForm />
      </TabPanel>
      <Toolbar>
        {medias.map((med) => (
          <IconButton
            key={med.id}
            color="secondary"
            component="a"
            href={med.href}
            target="blank"
          >
            {med.icon}
          </IconButton>
        ))}
        <List className={classes.langs} disablePadding="true" dense="true">
          {langs.map((ln) => (
            <ListItem key={ln.name}>
              <Button color="secondary" onClick={() => changeLanguage(ln.name)}>
                {ln.title}
              </Button>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </div>
  );
}
