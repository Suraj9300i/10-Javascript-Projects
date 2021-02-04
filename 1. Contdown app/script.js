"use strict";

const ts = document.querySelector(".time-sec");
const tm = document.querySelector(".time-min");
const th = document.querySelector(".time-hour");
const td = document.querySelector(".time-day");

const myFunction = function () {
    const myBirthdate = new Date("2000-sep-17");
    const now = new Date();

    let myBirthdayThisYear = new Date(
        `${now.getFullYear()}/${
            myBirthdate.getMonth() + 1
        }/${myBirthdate.getDate()}`
    );

    let diff;
    if (Number(myBirthdayThisYear) > Number(now)) {
        diff = Math.abs(Number(now) - Number(myBirthdayThisYear));
    } else {
        myBirthdayThisYear = new Date(
            `${now.getFullYear() + 1}/${
                myBirthdate.getMonth() + 1
            }/${myBirthdate.getDate()}`
        );
        diff = Math.abs(Number(now) - Number(myBirthdayThisYear));
    }
    const day = diff / (1000 * 60 * 60 * 24);
    const dayR = diff % (1000 * 60 * 60 * 24);

    const hour = dayR / (1000 * 60 * 60);
    const hourR = dayR % (1000 * 60 * 60);

    const min = hourR / (1000 * 60);
    const minR = hourR % (1000 * 60);

    const sec = minR / 1000;
    const secR = minR % 1000;

    console.log(
        `${Math.trunc(day)} : ${Math.trunc(hour)} : ${Math.trunc(
            min
        )} : ${Math.trunc(sec)}`
    );

    ts.textContent = Math.trunc(sec);
    tm.textContent = Math.trunc(min);
    th.textContent = Math.trunc(hour);
    td.textContent = Math.trunc(day);
};

setInterval(myFunction, 1000);
