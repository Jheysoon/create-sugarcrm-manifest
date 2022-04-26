#!/usr/bin/env node

const getChangedFiles = require("get-changed-files");
const { uniq, forEach } = require("lodash");
const fs = require("fs");

const pathToGit = "/<your_project_path_here>";

getChangedFiles({
  mainBranch: "main",
  basePath: pathToGit,
}).then((results) => {
  const changedFiles = uniq(results.changed);

  let content = "<?php";

  content = content + "\n$installdefs = \n\tarray(\n\t";

  content = content + "'id' => 'test_id',\n\t";
  content = content + "'copy' => array(\n";

  forEach(changedFiles, (val) => {
    content = content + "\t\tarray(\n\t\t\t'from' => '<basepath>/" + val + "',";
    content = content + "\n\t\t\t'to' => '" + val + "'\n\t\t),\n";
  });

  content = content + "\t),\n";

  content = content + ");";

  fs.writeFile(pathToGit + "/manifest.php", content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
