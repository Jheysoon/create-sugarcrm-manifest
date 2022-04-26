#!/usr/bin/env node

const yargs = require("yargs");
const gitChangedFiles = require("git-changed-files");

const options = yargs
  .option("fromCommit", {
    alias: "fc",
    describe: "",
    type: "string",
    //demandOption: true,
  })
  .option("toCommit", {
    alias: "tc",
    describe: "",
    type: "string",
    //demandOption: true,
  }).argv;

const { exec } = require("child_process");

(async () => {
  let committedGitFiles = await gitChangedFiles();
  console.log(committedGitFiles);
})().catch((err) => {
  console.log(err);
});
