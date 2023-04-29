# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

















const PDFDocument = require("pdfkit-table");
const fs = require("fs");
const path = require("path");
// const PDF = require("pdfkit");
const nodemailer = require("nodemailer");
const Student = require("../models/student");
const Parent = require("../models/parent");
const Teacher = require("../models/teacher");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ilovesyria898testnode@gmail.com",
    pass: "pmuojgznqazvmwmp",
  },
});

exports.getPdfDoc = (req, res) => {
  try {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename= report.pdf");

    const pdfPath = path.join(__dirname + "/pdfs", "report.pdf");
    const imagePath = path.join(__dirname + "/images", "st2.jpg");

    const stream = fs.createWriteStream(pdfPath);

    Student.findOne({ _id: "643b151c96aba1986a01d439" })
      .then((dbStudent) => {
        const defaultOptions = {
          margins: { top: 50, left: 100, right: 100, bottom: 10 },
          size: "A4",
        };

        const pdfDoc = new PDFDocument(defaultOptions);

        // pdfDoc.fontSize(21).text(`Student Tracking System`);
        // pdfDoc.moveDown();
        // pdfDoc.moveDown();

        pdfDoc
          .fontSize(20)
          .font("Helvetica-Bold")
          .text(`Monthlly Report`, {
            fit: [250, 300],
            align: "center",
            valign: "center",
          })
          .moveDown();
        pdfDoc.moveDown();

        pdfDoc.fontSize(14).text(`Student name : ${dbStudent.studentName}`);

        pdfDoc.moveDown();

        pdfDoc.image(imagePath, 70, 140, { width: 150, height: 150 });

        pdfDoc.moveDown();
        pdfDoc.moveDown();

        //shoud get his number id dinamically later
        pdfDoc
          .fontSize(14)
          .font("Helvetica")
          .text(`ID Number : 22`, {
            fit: [250, 300],
            align: "center",
            valign: "center",
          });
        pdfDoc.moveDown();

        pdfDoc.fontSize(14).text(`Class : ${dbStudent.class}`, {
          fit: [250, 300],
          align: "center",
          valign: "center",
        });
        pdfDoc.moveDown();




        
        Student.findById({ _id: "643b151c96aba1986a01d439" }).then(
          (dbStudent) => {
            const teacherId = dbStudent.teacher_id;

            Teacher.findOne({ _id: teacherId }).then((dbTeacher) => {
              const teacherName = dbTeacher.name;
              pdfDoc.fontSize(14).text(`Teacher : ${teacherName}`, {
                fit: [250, 300],
                align: "center",
                valign: "center",
              });
            });
          }
        );

     
        pdfDoc.moveDown();
        pdfDoc.moveDown();
        pdfDoc.moveDown();

        //------------- create table -----------------------
        (async () => {
          const mathMark = dbStudent.typeExam.first.subjects.math.mark;
          const englishMark = dbStudent.typeExam.first.subjects.english.mark;
          const arbicMark = dbStudent.typeExam.first.subjects.arbic.mark;
          const historyMark = dbStudent.typeExam.first.subjects.history.mark;
          const scienceMark = dbStudent.typeExam.first.subjects.science.mark;

          const mathNote = dbStudent.typeExam.first.subjects.math.note;
          const englishNote = dbStudent.typeExam.first.subjects.english.note;
          const arbicNote = dbStudent.typeExam.first.subjects.arbic.note;
          const historyNote = dbStudent.typeExam.first.subjects.history.note;
          const scienceNote = dbStudent.typeExam.first.subjects.science.note;

          const mathStar = dbStudent.typeExam.first.subjects.math.star;
          const englishStar = dbStudent.typeExam.first.subjects.english.star;
          const arbicStar = dbStudent.typeExam.first.subjects.arbic.star;
          const historyStar = dbStudent.typeExam.first.subjects.history.star;
          const scienceStar = dbStudent.typeExam.first.subjects.science.star;

          const table = {
            title: "Student Table ",
            headers: [
              {
                label: "Subject",
                property: "subject",
                width: 60,
                renderer: null,
              },
              {
                label: "Behavior",
                property: "behavior",
                width: 60,
                renderer: null,
              },
              { label: "Mark", property: "mark", width: 60, renderer: null },
              { label: "Note", property: "note", width: 150, renderer: null },
              { label: "Star", property: "star", width: 60, renderer: null },
            ],

            rows: [
              ["Math", "Excellent", mathMark, mathNote, `${mathStar}/5`],
              [
                "English",
                "Very Good",
                englishMark,
                englishNote,
                `${englishStar}/5`,
              ],
              ["Arbic", "Good", arbicMark, arbicNote, `${arbicStar}/5`],
              ["History", "Bad", historyMark, historyNote, `${historyStar}/5`],
              [
                "Science",
                "Very Good",
                scienceMark,
                scienceNote,
                `${scienceStar}/5`,
              ],
            ],
          };
          // the magic
          pdfDoc.table(table, {
            prepareHeader: () => pdfDoc.font("Helvetica-Bold").fontSize(10),
            prepareRow: (row, indexColumn, indexRow, rectRow) => {
              pdfDoc.font("Helvetica").fontSize(9);
              indexColumn === 0 && pdfDoc.addBackground(rectRow, "green", 0.26);
            },
          });
        })();

        pdfDoc.moveDown();
        pdfDoc
          .fontSize(14)
          .text(`All absence days : ${dbStudent.absence.length}`);
        pdfDoc.moveDown();
        pdfDoc
          .fontSize(14)
          .text(`Student Level : ${dbStudent.studentLevelRate}%`);

        pdfDoc.pipe(stream);
        pdfDoc.end();
      })
      .catch((err) => {
        console.log(err);
      });

    stream.on("finish", () => {
      res.sendFile(pdfPath);

      // Send to the parent Email
      Student.findById({ _id: "643b151c96aba1986a01d439" })
        .then((dbStudent) => {
          const parentId = dbStudent.parent_id;

          Parent.findOne({ _id: parentId })
            .then((dbParent) => {
              transporter.sendMail({
                to: dbParent.emailAdress,
                from: "ilovesyria898testnode@gmail.com",
                subject: "Student Tracking System",
                html: `It's a monthlly report`,
                attachments: [
                  {
                    filename: "Report.pdf",
                    path: pdfPath,
                    contentType: "application/pdf",
                  },
                ],
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });

    stream.on("error", (err) => {
      console.error(err);
      res.status(500).send("Failed to send pdf.");
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error occured");
  }
};
