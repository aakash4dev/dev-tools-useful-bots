setTimeout(() => {
  a = document.getElementsByClassName(
    "q-click-wrapper qu-display--inline-block qu-tapHighlight--white qu-cursor--pointer qu-hover--textDecoration--underline ClickWrapper___StyledClickWrapperBox-zoqi4f-0 iyYUZT"
  );
  for (let i = 0; i < 10; i++) {
    a[i].click();
  }

  b = document.getElementsByClassName(
    "q-click-wrapper qu-display--inline-block qu-tapHighlight--white qu-cursor--pointer qu-hover--textDecoration--underline ClickWrapper___StyledClickWrapperBox-zoqi4f-0 iyYUZT"
  );
  for (let j = 0; j < 10; j++) {
    b[j].click();
  }

  setTimeout(() => {
    document
      .getElementsByClassName(
        "q-flex qu-alignItems--center qu-justifyContent--center"
      )[0]
      .click();
  }, 10 * 1000);
}, 10 * 1000);
