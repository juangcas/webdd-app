import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  Toolbar,
  AppBar,
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Slide,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const num_projects = 3;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createData(
  id,
  name,
  category,
  langs,
  date,
  description,
  image,
  status,
  url,
  open,
  setOpen,
  titCategory,
  titLangs,
  titDate
) {
  rows.push(
    new Project(
      id,
      name,
      category,
      langs,
      date,
      description,
      image,
      status,
      url,
      open,
      setOpen,
      titCategory,
      titLangs,
      titDate
    )
  );
}

class Project {
  constructor(
    id,
    name,
    category,
    langs,
    date,
    description,
    image,
    status,
    url,
    open,
    setOpen,
    titCategory,
    titLangs,
    titDate
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.langs = langs;
    this.date = date;
    this.description = description;
    this.image = image;
    this.status = status;
    this.url = url;
    this.open = open;
    this.setOpen = setOpen;
    this.titCategory = titCategory;
    this.titLangs = titLangs;
    this.titDate = titDate;
  }

  handleClickOpen = () => {
    this.setOpen(true);
  };

  handleClose = () => {
    this.setOpen(false);
  };

  Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  get dialog() {
    return (
      <Dialog
        fullScreen
        open={this.open}
        onClose={this.handleClose}
        TransitionComponent={this.Transition}
      >
        <AppBar>
          <Toolbar>
            {this.id}
            <IconButton
              color="inherit"
              onClick={this.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={this.name}
              height="140"
              image={this.image}
              title={this.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.description}. {this.titCategory} {this.category},
                {this.titLangs}: {this.langs},{this.titDate} {this.date}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    );
  }
}

let rows = [];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function PrjsTable() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  for (let i = 0; i < num_projects; i++) {
    const id = i;
    const name = t(`projects.data.${i}.name`);
    const category = t(`projects.data.${i}.category`);
    const langs = t(`projects.data.${i}.langs`);
    let date = t(`projects.data.${i}.date`);
    date = date.split("-");
    const yea = Number(date[0]);
    const mon = Number(date[1]);
    let ymd = new Date();
    ymd.setFullYear(yea, mon);
    date = months[ymd.getMonth()] + " of " + ymd.getFullYear();
    const description = t(`projects.data.${i}.description`);
    const image = t(`projects.data.${i}.image`);
    const status = t(`projects.data.${i}.status`);
    const url = t(`projects.data.${i}.url`);

    createData(
      id,
      name,
      category,
      langs,
      date,
      description,
      image,
      status,
      url,
      open,
      setOpen
    );
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="projects table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              {t("projects.datitles.short.name")}
            </TableCell>
            <TableCell align="center">
              {t("projects.datitles.short.category")}
            </TableCell>
            <TableCell align="center">
              {t("projects.datitles.short.langs")}
            </TableCell>
            <TableCell align="center">
              {t("projects.datitles.yearmt")}
            </TableCell>
            <TableCell align="center">
              {t("projects.datitles.short.description")}
            </TableCell>
            <TableCell align="center">
              {t("projects.datitles.short.image")}
            </TableCell>
            <TableCell align="center">
              {t("projects.datitles.short.status")}
            </TableCell>
            <TableCell align="center">
              {t("projects.datitles.short.url")}
            </TableCell>
            {/* <TableCell align="center">
              {t("projects.datitles.short.detail")}
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.langs}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.description}</TableCell>
              <td>
                <TableCell
                  component="img"
                  height="96"
                  src={row.image}
                  alt={row.name}
                />
              </td>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.url}</TableCell>
              {/* <TableCell>
                <IconButton
                 color="inherit"
                 onClick={row.handleClickOpen}
                 aria-label="detail"
                >
                  <MoreVertIcon />
                </IconButton>
                <ProjectDetail project={row}/>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
