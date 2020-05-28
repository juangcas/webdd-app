import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Code from "@material-ui/icons/Code";
import ImportantDevices from "@material-ui/icons/ImportantDevices";
import Book from "@material-ui/icons/Book";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Translate from "@material-ui/icons/Translate";
import StorageIcon from '@material-ui/icons/Storage';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useTranslation } from "react-i18next";

const num_serv = 6;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

class Service{
  constructor(id,title,description){
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

export default function SrvTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  let services = [];
  let i = 0;
  do {
    const tit = t(`home.services.${i}.title`);
    const des = t(`home.services.${i}.description`);
    services.push(new Service(i,tit,des));
    i++;
  } while (i < num_serv);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab icon={<Code />} {...a11yProps(0)} />
          <Tab icon={<ImportantDevices />} {...a11yProps(1)} />
          <Tab icon={<Book />} {...a11yProps(2)} />
          <Tab icon={<ArtTrack />} {...a11yProps(3)} />
          <Tab icon={<Translate />} {...a11yProps(4)} />
          <Tab icon={<StorageIcon />} {...a11yProps(5)} />        </Tabs>
      </AppBar>

      {services.map(srv => (
        <TabPanel value={value} index={srv.id} key={srv.id}>
          <strong>{srv.title}</strong>
          <br />{srv.description}
        </TabPanel>
      ))}
    </div>
  );
}
