$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases/Done/Add_Activity.feature");
formatter.feature({
  "name": "Add Activity",
  "description": "\tDescription: Add Activiy to project\n\tActor: User",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add activtiy to existing project",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"troubleshooting\" start date \"01\" \"01\" \"2019\" and end date \"31\" \"12\" \"2019\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"troubleshooting\" is added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add activity with same end and start date",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"troubleshooting\" start date \"15\" \"01\" \"2007\" and end date \"15\" \"01\" \"2007\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"troubleshooting\" is added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add activtiy with name Sickness Holiday or Courses[1]",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"Sickness\" start date \"01\" \"01\" \"2019\" and end date \"31\" \"12\" \"2019\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"Sickness\" is not added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsNotAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the message \"Illegal name for activity\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Activity_Steps.getTheMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add activtiy with name Sickness Holiday or Courses[2]",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"Holiday\" start date \"01\" \"01\" \"2019\" and end date \"31\" \"12\" \"2019\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"Holiday\" is not added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsNotAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the message \"Illegal name for activity\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Activity_Steps.getTheMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add activtiy with name Sickness Holiday or Courses[2]",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"Courses\" start date \"01\" \"01\" \"2019\" and end date \"31\" \"12\" \"2019\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"Courses\" is not added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsNotAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the message \"Illegal name for activity\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Activity_Steps.getTheMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add activity with end year before start year fails",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"troubleshooting\" start date \"01\" \"01\" \"2019\" and end date \"31\" \"12\" \"1019\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"troubleshooting\" is not added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsNotAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the message \"End date cannot be before start date\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Activity_Steps.getTheMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add activity with same start and end year and earlier end month fails",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"troubleshooting\" start date \"31\" \"02\" \"2019\" and end date \"31\" \"01\" \"2019\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"troubleshooting\" is not added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsNotAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the message \"End date cannot be before start date\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Activity_Steps.getTheMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add activity with same start and end year and month and earlier end day than start day fails",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"troubleshooting\" start date \"31\" \"01\" \"2019\" and end date \"05\" \"01\" \"2019\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"troubleshooting\" is not added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsNotAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the message \"End date cannot be before start date\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Activity_Steps.getTheMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add activity with none integer input in days fail",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"troubleshooting\" start date \"au\" \"01\" \"2019\" and end date \"31\" \"01\" \"2019\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"troubleshooting\" is not added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsNotAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the message \"Days should only consist of numbers\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Activity_Steps.getTheMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add activity with none integer input in months fail",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"troubleshooting\" start date \"15\" \"iu\" \"2019\" and end date \"31\" \"01\" \"2019\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"troubleshooting\" is not added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsNotAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the message \"Months should only consist of numbers\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Activity_Steps.getTheMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add activity with none integer input in year fail",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an activity with name \"troubleshooting\" start date \"15\" \"01\" \"defr\" and end date \"31\" \"01\" \"2019\" and expected time \"300\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Activity_Steps.anActivityWithNameStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to add activity to project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Activity_Steps.userTriesToAddActivityToProjectWithIndex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity with name \"troubleshooting\" is not added to project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Activity_Steps.theActivityWithNameIsNotAddedToProjectWithIndex(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the message \"Years should only consist of numbers\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Activity_Steps.getTheMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/Done/Add_Project.feature");
formatter.feature({
  "name": "Add project",
  "description": "\tDescription: Add project to system\n\tActor: User",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add project succeed[1]",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"01\" \"2019\" and end date \"31\" \"12\" \"2019\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project succeed[2]",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"01\" \"2019\" and end date \"01\" \"01\" \"2019\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project succeed[2]",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"01\" \"2019\" and end date \"01\" \"01\" \"2020\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, because of the end date is before the start date",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"12\" \"01\" \"2019\" and end date \"10\" \"01\" \"2019\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get error message \"End date cannot be before start date\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Project.getErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, because of the end date is before the start date",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"03\" \"2019\" and end date \"31\" \"01\" \"2018\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get error message \"End date cannot be before start date\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Project.getErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, because of date can only consist of numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"aa\" \"01\" \"2019\" and end date \"31\" \"12\" \"2018\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get error message \"Days should only consist of numbers\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Project.getErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, because of date can only consist of numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"aa\" \"2019\" and end date \"31\" \"12\" \"2018\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get error message \"Months should only consist of numbers\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Project.getErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, because of date can only consist of numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"01\" \"aaaa\" and end date \"31\" \"12\" \"2018\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get error message \"Years should only consist of numbers\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Project.getErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, cause of not legal day input",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"111\" \"01\" \"2019\" and end date \"31\" \"12\" \"2018\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, cause of not legal month input",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"111\" \"2019\" and end date \"31\" \"12\" \"2018\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, cause of not legal Year input",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"01\" \"11111\" and end date \"31\" \"12\" \"2018\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, cause of expected time need to be above 0",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"01\" \"2019\" and end date \"31\" \"12\" \"2019\" and expected time \"0\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, cause of expected time can only consist of numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"01\" \"2019\" and end date \"31\" \"12\" \"2019\" and expected time \"a.%1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, because of day is above \"31\"",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"32\" \"01\" \"2019\" and end date \"35\" \"01\" \"2019\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get error message \"Illegal day input\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Project.getErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add project fails, because of day is above \"31\"",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new project with start date \"01\" \"01\" \"2019\" and end date \"31\" \"20\" \"2019\" and expected time \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_Project.aNewProjectWithStartDateAndEndDateAndExpectedTime(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to add project",
  "keyword": "When "
});
formatter.match({
  "location": "Add_Project.usersTriesToAddProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the project with the name \"190001\" do not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Project.andTheProjectWithTheNameDoNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get error message \"Illegal month input\"",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Project.getErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/Done/Add_User_to_Activity.feature");
formatter.feature({
  "name": "Add user to activity",
  "description": "\tDescription: Add user to an activity\n\tActor: User",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add user to activity succeed[1]",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A user with name \"LSMD\" and a project with index 1 with the activity \"Housewarming\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_User_To_Activity_Steps.aUserWithNameAndAProjectWithIndexWithTheActivity(String,int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"LSMD\" tries to be added to the activity \"Housewarming\" in the project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_User_To_Activity_Steps.userTriesToBeAddedToTheActivityInTheProjectWithIndex(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"LSMD\" is added to the activity \"Housewarming\" under project with index 1",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_User_To_Activity_Steps.theUserIsAddedToTheActivityUnderProjectWithIndex(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add user to activity that does not exist fails[1]",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A user with name \"KOOL\" and a project with index 1 with the activity \"Housewarming\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Add_User_To_Activity_Steps.aUserWithNameAndAProjectWithIndexWithTheActivity(String,int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"KOOL\" tries to be added to the activity \"Housewarming\" in the project with index 1",
  "keyword": "When "
});
formatter.match({
  "location": "Add_User_To_Activity_Steps.userTriesToBeAddedToTheActivityInTheProjectWithIndex(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system returns message \"User doesn\u0027t exist\" and the user is not added again.",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_User_To_Activity_Steps.theSystemReturnsMessageAndTheUserIsNotAddedAgain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/Done/Register_User.feature");
formatter.feature({
  "name": "User Registration",
  "description": "\tDescription: User is registrated to system\n\tActor: User",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User registration succeeds",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new user with id \"ABCD\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Registration.aNewUserWithId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to be registred",
  "keyword": "When "
});
formatter.match({
  "location": "User_Registration.usersTriesToBeRegistred()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registration succeeds",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Registration.theUserRegistrationSucceeds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"ABCD\" can be found in the companylist",
  "keyword": "And "
});
formatter.match({
  "location": "User_Registration.theUserCanBeFoundInTheCompanylist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User registration succeeds",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new user with id \"CDF\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Registration.aNewUserWithId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to be registred",
  "keyword": "When "
});
formatter.match({
  "location": "User_Registration.usersTriesToBeRegistred()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registration succeeds",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Registration.theUserRegistrationSucceeds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"CDF\" can be found in the companylist",
  "keyword": "And "
});
formatter.match({
  "location": "User_Registration.theUserCanBeFoundInTheCompanylist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User registration succeeds",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new user with id \"AB\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Registration.aNewUserWithId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to be registred",
  "keyword": "When "
});
formatter.match({
  "location": "User_Registration.usersTriesToBeRegistred()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registration succeeds",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Registration.theUserRegistrationSucceeds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"AB\" can be found in the companylist",
  "keyword": "And "
});
formatter.match({
  "location": "User_Registration.theUserCanBeFoundInTheCompanylist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User registration succeeds",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new user with id \"A\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Registration.aNewUserWithId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to be registred",
  "keyword": "When "
});
formatter.match({
  "location": "User_Registration.usersTriesToBeRegistred()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registration succeeds",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Registration.theUserRegistrationSucceeds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"A\" can be found in the companylist",
  "keyword": "And "
});
formatter.match({
  "location": "User_Registration.theUserCanBeFoundInTheCompanylist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User registration fails(1)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new user with id \"abcd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Registration.aNewUserWithId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to be registred",
  "keyword": "When "
});
formatter.match({
  "location": "User_Registration.usersTriesToBeRegistred()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registration fails, and get message \"User name cannot contain numbers, and should have a length between one and four.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Registration.theUserRegistrationFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"abcd\" cannot be found in the companylist",
  "keyword": "And "
});
formatter.match({
  "location": "User_Registration.theUserCannotBeFoundInTheCompanylist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User registration fails(2)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new user with id \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Registration.aNewUserWithId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to be registred",
  "keyword": "When "
});
formatter.match({
  "location": "User_Registration.usersTriesToBeRegistred()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registration fails, and get message \"User name cannot contain numbers, and should have a length between one and four.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Registration.theUserRegistrationFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"\" cannot be found in the companylist",
  "keyword": "And "
});
formatter.match({
  "location": "User_Registration.theUserCannotBeFoundInTheCompanylist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User registration fails(3)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new user with id \"12AB\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Registration.aNewUserWithId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to be registred",
  "keyword": "When "
});
formatter.match({
  "location": "User_Registration.usersTriesToBeRegistred()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registration fails, and get message \"User name cannot contain numbers, and should have a length between one and four.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Registration.theUserRegistrationFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"12AB\" cannot be found in the companylist",
  "keyword": "And "
});
formatter.match({
  "location": "User_Registration.theUserCannotBeFoundInTheCompanylist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User registration fails(4)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new user with id \"A,B.\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Registration.aNewUserWithId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to be registred",
  "keyword": "When "
});
formatter.match({
  "location": "User_Registration.usersTriesToBeRegistred()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registration fails, and get message \"User name cannot contain numbers, and should have a length between one and four.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Registration.theUserRegistrationFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"A,B.\" cannot be found in the companylist",
  "keyword": "And "
});
formatter.match({
  "location": "User_Registration.theUserCannotBeFoundInTheCompanylist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User registration fails(5)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a new user with id \"ABCDE\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Registration.aNewUserWithId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users tries to be registred",
  "keyword": "When "
});
formatter.match({
  "location": "User_Registration.usersTriesToBeRegistred()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registration fails, and get message \"User name cannot contain numbers, and should have a length between one and four.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Registration.theUserRegistrationFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"ABCDE\" cannot be found in the companylist",
  "keyword": "And "
});
formatter.match({
  "location": "User_Registration.theUserCannotBeFoundInTheCompanylist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/Done/User_Login.feature");
formatter.feature({
  "name": "User login",
  "description": "\tDescription: The user logs into the sytem\n\tActor: User",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user can login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user with the user name \"LSMD\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login_Steps.aUserWithTheUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user tries to login",
  "keyword": "When "
});
formatter.match({
  "location": "User_Login_Steps.theUserTriesToLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login succeeds",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Login_Steps.theUserLoginSucceeds()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cant login, cause of wrong user name(1)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user with the user name \"ABC\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login_Steps.aUserWithTheUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user tries to login",
  "keyword": "When "
});
formatter.match({
  "location": "User_Login_Steps.theUserTriesToLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login fails, and get message \"User does not exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Login_Steps.theUserLoginFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cant login, cause of wrong user name(2)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user with the user name \"123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login_Steps.aUserWithTheUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user tries to login",
  "keyword": "When "
});
formatter.match({
  "location": "User_Login_Steps.theUserTriesToLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login fails, and get message \"User does not exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Login_Steps.theUserLoginFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cant login, cause of wrong user name(3)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user with the user name \"1%a\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login_Steps.aUserWithTheUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user tries to login",
  "keyword": "When "
});
formatter.match({
  "location": "User_Login_Steps.theUserTriesToLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login fails, and get message \"User does not exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Login_Steps.theUserLoginFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cant login, cause of wrong user name(4)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user with the user name \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login_Steps.aUserWithTheUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user tries to login",
  "keyword": "When "
});
formatter.match({
  "location": "User_Login_Steps.theUserTriesToLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login fails, and get message \"User does not exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Login_Steps.theUserLoginFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cant login, cause of wrong user name(5)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user with the user name \"a,b.\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login_Steps.aUserWithTheUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user tries to login",
  "keyword": "When "
});
formatter.match({
  "location": "User_Login_Steps.theUserTriesToLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login fails, and get message \"User does not exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Login_Steps.theUserLoginFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cant login, cause of wrong user name(6)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user with the user name \"LSMDA\"",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login_Steps.aUserWithTheUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user tries to login",
  "keyword": "When "
});
formatter.match({
  "location": "User_Login_Steps.theUserTriesToLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login fails, and get message \"User does not exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Login_Steps.theUserLoginFailsAndGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/To do/Register_Time.feature");
formatter.feature({
  "name": "Register time to an activity",
  "description": "\tDescription: a user, tries to register time to an activity, \n\tthen the time is listed under the user in the activity, \n\tthe activity is an activity made for testing purpose\n\tActor: User",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "users time registration succeed",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user \"LSMD\" is logged in, and the user have worked 7 hours on the activity \"sickness\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user tries to register time",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the time 7 is registed under the user \"LSMD\" in the activity \"Housewarming\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "trying to register 0 hours",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user \"LSMD\" is logged in, and the user have worked 0 hours on the activity \"sickness\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user tries to register time",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the time 0 is not registed under the user \"LSMD\" in the activity \"Housewarming\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Trying to register time, to an activity that do not exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user \"LSMD\" is logged in, and the user have worked 7 hours on the activity \"Make GUI\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user tries to register time",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the time 7 is not registed under the user \"LSMD\" in the activity \"Make GUI\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "trying to register over 24 hours on an activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user \"LSMD\" is logged in, and the user have worked 25 hours on the activity \"sickness\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user tries to register time",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the time 25 is not registed under the user \"LSMD\" in the activity \"sickness\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "trying to register none integer",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user \"LSMD\" is logged in, and the user have worked \"a\" hours on the activity \"sickness\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user tries to register time",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the time \"a\" is not registed under the user \"LSMD\" in the activity \"sickness\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});