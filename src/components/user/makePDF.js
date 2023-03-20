import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Logo1 from "./logo1.png";
import amrit from "./R.png";
import sans from "./logosans.png";

import Logo from "./G20.png";
import { center } from "@cloudinary/url-gen/qualifiers/textAlignment";
import { getUserDetails } from "../../services/registerUser";
import { auth } from "../../firebase";
import getEvents from "../../services/getEvents";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  amrita: {
    width: "50%",
    height: 100,
    float: "center",
    position: "center",
    padding: 20,
    margin: "auto",
  },
  sans: {
    width: "40%",
    height: 100,
    float: "center",
    position: "center",
    padding: 10,
    margin: "auto",
  },
  image: {
    width: 100,
    height: 50,
  },
  info: {
    padding: 20,
    display: "flex",
    width: "100%",
  },
  infoHolder: {
    fontSize: 10,
    padding: 3,
    // backgroundColor: "#BCFFFB",
  },
});

// Create Document Component
const MyDocument = ({ data }) => {
  // var sum;
  // console.log(eventDetails);
  const [total, setTotal] = useState(0);
  const [events, setEvents] = useState([]);
  const [userDetials, setUser] = useState({});
  const [trid, setTrid] = useState("");

  const getData = async (user) => {
    const data = await getUserDetails(user);
    var len = data.transactionID.length;
    setTrid(data.transactionID[len - 1]);
    console.log("data", data);

    var evtList = data.individualEvents.map((evt) => evt.eventFee);
    console.log(evtList);

    var groupEvents = data.teamEvents.map((evt) => evt.eventFee);
    console.log(groupEvents);
    evtList = [...evtList, ...groupEvents];
    setUser(data);
    // console.log(data);

    const evt = await getEvents(evtList);
    setEvents(evt);
    var sum = 0;
    for (var i = 0; i < evtList.length; i++) {
      sum += evtList[i];
    }
    for (var i = 0; i < groupEvents.length; i++) {
      sum += groupEvents[i];
    }
    setTotal(sum);
  };
  console.log("sum", total);

  useEffect(() => {
    const user = auth.currentUser;
    getData(user.email);
  }, []);
  console.log(data);
  const viewData = (event) => {
    var single = data.individualEvents.filter(
      (e) => e.eventName === event.data.name
    );
    var team = data.teamEvents.filter((e) => e.eventName === event.data.name);
    console.log(team);
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* <View>
          <Image src={Logo1} />
        </View> */}
        <View style={styles.info}>
          <Image style={styles.amrita} src={amrit} />
          <Image style={styles.sans} src={sans} />
          {/* <Text style={{ marginBottom: 5, marginTop: 30, fontSize: 13 }}>
            Name of the institution: {data.universityName}
          </Text> */}
          <Text
            style={{
              fontSize: 13,
              marginBottom: 10,
              marginTop: 23,
              float: "right",
              textAlign: "right",
              marginRight: 0,
              paddingRight: 0,
            }}
          >
            Transaction id: {trid}
          </Text>
          <Text style={{ marginBottom: 10, marginTop: -23, fontSize: 13 }}>
            Receipt ID: AVV/Tantrotsav/{trid}
          </Text>
          <Text style={{ fontSize: 13, marginBottom: 5, marginTop: 20 }}>
            Particpant Information
          </Text>
          <Text style={styles.infoHolder}>Name: {data.fullName}</Text>
          {/* <Text style={styles.infoHolder}>Email: {data.email}</Text> */}
          <Text style={styles.infoHolder}>Phone No: {data.whatsappNumber}</Text>
          <Text style={styles.infoHolder}>
            Name of the institution: {data.universityName}
          </Text>
          {/* <Text style={styles.infoHolder}>
            College Name: {data.universityName}
          </Text> */}
        </View>
        <View style={{ width: "100%", padding: 10 }}>
          <Text style={{ marginBottom: 10 }}>Fee Receipt</Text>
          {console.log(events)}
          <View style={{ padding: 10, position: "relative", height: "30px" }}>
            <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "10px",
              }}
            >
              S.No
            </Text>
            <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "50px",
              }}
            >
              Purpose
            </Text>
            <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "280px",
              }}
            >
              Date
            </Text>
            {/* <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "380px",
              }}
            >
              Mode
            </Text> */}

            <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "480px",
              }}
            >
              Total Amount
            </Text>
          </View>

          <View
            style={{
              padding: 10,

              position: "relative",
              height: "30px",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "10px",
              }}
            >
              1.
            </Text>
            <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "50px",
              }}
            >
              {/* {event.data.name} */}
              Tantrotsav Events
            </Text>
            <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "280px",
              }}
            >
              03/04/2023 - 04/04/2023
              {/* {event.data.studentCoordinator[0].Name}-
                    {event.data.studentCoordinator[0].contact} */}
            </Text>
            <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "480px",
              }}
            >
              {total}
              {/* {event.data.studentCoordinator[0].Name}-
                    {event.data.studentCoordinator[0].contact} */}
            </Text>
            {/* <Text
                    style={{
                      fontSize: 13,
                      position: "absolute",
                      top: "5px",
                      left: "380px",
                    }}
                  >
                    Online
                  </Text> */}
          </View>
        </View>

        <Text
          style={{
            fontSize: 10,
            justifyContent: "space-evenly",
            marginBottom: 10,
            marginTop: 50,
            float: "right",
            textAlign: "right",
            marginRight: 0,
            paddingRight: 0,
          }}
        >
          This is a computer generated receipt, hence no signature required.
        </Text>
        <Text
          style={{
            fontSize: 8,
            float: "right",
            textAlign: "justify",
            marginRight: 0,
            paddingRight: 0,
          }}
        >
          {
            // "Inclusive of all taxes:- \nFor Amrita Students: all taxes are included in the fee,\nFor other university students: 18% gst. "
          }
        </Text>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 10 }}>
            {
              "Amrita Vishwa Vidyapeetham\nChennai Campus,\n337/1A, Vengal Village,\nThiruvallur Taluk & District - 601 103.\nTamil Nadu, India\nPhone: 1 800 425 90009\nEmail: btech@amrita.edu"
            }
          </Text>
          <Image style={{ height: 70, width: 300 }} src={Logo} />
        </View>
      </Page>
      {events.length > 13 && (
        <Page size="A4" style={styles.page}>
          <View style={{ width: "100%", padding: 10 }}>
            <Text style={{ marginBottom: 10 }}>Events participating</Text>
            {console.log(events)}
            <View style={{ padding: 10, position: "relative", height: "30px" }}>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "10px",
                }}
              >
                Purpose
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "250px",
                }}
              >
                Date
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "300px",
                }}
              >
                Mode
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "500px",
                }}
              >
                Amount
              </Text>
            </View>
            {events.map(
              (event, i) =>
                i >= 13 && (
                  <View
                    style={{
                      padding: 10,
                      backgroundColor: i % 2 === 0 ? "#B2D6F9" : "#D7EAFC",
                      position: "relative",
                      height: "30px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 13,
                        position: "absolute",
                        top: "5px",
                        left: "10px",
                      }}
                    >
                      {/* {i + 1}. {event.data.name} */}
                      {i + 1}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        position: "absolute",
                        top: "5px",
                        left: "250px",
                      }}
                    >
                      {" "}
                      {event.data.name}
                      {/* {event.data.studentCoordinator[0].Name}-
                      {event.data.studentCoordinator[0].contact} */}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        position: "absolute",
                        top: "5px",
                        left: "500px",
                      }}
                    >
                      {viewData(event.sum)}
                    </Text>
                  </View>
                )
            )}
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              padding: 10,
            }}
          >
            {/* <Text style={{ fontSize: 10 }}>
              {
                "Amrita Vishwa Vidyapeetham\nChennai Campus,\n337/1A, Vengal Village,\nThiruvallur Taluk & District – 601 103.\nTamil Nadu, India\nPhone: 1 800 425 90009\nEmail: btech@amrita.edu"
              }
            </Text> */}
            {/* <Image style={{ height: 70, width: 360 }} src={Logo} /> */}
          </View>
        </Page>
      )}
    </Document>
  );
};

export default MyDocument;
