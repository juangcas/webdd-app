import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

class Item {
  constructor(id,title,description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function AspAcco() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  let knArray = [];
  const { t } = useTranslation();
  for (let i = 0; i < 18; i++) {
    knArray.push(new Item(i,'',t(`about.aspects.1.descriptions.${i}`)));
  }
  const knHTML = knArray.map(it => {
    return <ListItem key={it.id}>
      <ListItemText primary={it.description} />
    </ListItem>
  });
  let unArray = [];
  for (let i = 0; i < 4; i++) {
    const tit = t(`about.aspects.2.items.${i}.title`);
    const des = t(`about.aspects.2.items.${i}.description`);
    unArray.push(new Item(i,tit,des));
  }
  const unHTML = unArray.map(it => {
    const full = it.title + ': ' + it.description;
    return <ListItem key={it.id}><ListItemText primary={full} /></ListItem>
  });
  let otArray = [];
  for (let i = 0; i < 4; i++) {
    otArray.push(new Item(i,'',t(`about.aspects.3.descriptions.${i}`)));
  }
  const otHTML = otArray.map(it => {
    return <ListItem key={it.id}>
      <ListItemText primary={it.description} />
    </ListItem>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  });
  
  const leg = t('about.aspects.4.legend');
  const tit = t('about.aspects.4.link');
  const lab = t('about.aspects.4.get');
  const pr = new Item(leg,tit,lab);

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{t('about.aspects.0.label')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {t('about.aspects.0.description')}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>{t('about.aspects.1.label')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>{knHTML}</List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>{t('about.aspects.2.label')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>{unHTML}</List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>{t('about.aspects.3.label')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>{otHTML}</List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>{t('about.aspects.4.label')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>{pr.id}</p>
            <Link href={pr.title}>
              {pr.description}
            </Link>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
