import React from "react";
import { FormControlLabel, IconButton } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <>
      <h3>{t("contact.form.errNotAvailable")}</h3>
      <FormControlLabel
        control={
          <a
            target="_top"
            rel="noopener noreferrer"
            href="mailto:juangcas@gmail.com"
          >
            <IconButton color="primary">
              <EmailIcon /> {/* icon */}
            </IconButton>
          </a>
        }
        label={"juangcas@gmail.com"}
        labelPlacement="end"
      />
    </>
  );
}
