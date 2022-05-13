#!/usr/bin/env node

const getChangedFiles = require("get-changed-files");
const { uniq, forEach } = require("lodash");
const fs = require("fs");

const pathToGit = "/<your_project_path_here>";
const BUILT_IN_VERSION = "11.3.0";

getChangedFiles({
  mainBranch: "main",
  basePath: pathToGit,
}).then((results) => {
  const changedFiles = uniq(results.changed);

  let content = "<?php";

  content = content + "\n$manifest = array(\n";

  content = content + "\t'built_in_version' => '" + BUILT_IN_VERSION + "',\n";

  content = content + ");\n";

  content = content + "\n$installdefs = \n\tarray(\n\t";

  content = content + "\t'id' => 'test_id',\n\t";
  content = content + "\t'copy' => array(\n";

  forEach(changedFiles, (val) => {
    content =
      content + "\t\t\tarray(\n\t\t\t\t'from' => '<basepath>/" + val + "',";
    content = content + "\n\t\t\t\t'to' => '" + val + "'\n\t\t\t),\n";
  });

  content = content + "\t\t),\n";

  content = content + "\t);";

  fs.writeFile(pathToGit + "/manifest.php", content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
