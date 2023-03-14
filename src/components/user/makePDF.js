import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Logo1 from "./logosan.png";

import Logo from "./logo.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFF",
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
    fontSize: 15,
    padding: 5,
    backgroundColor: "#BCFFFB",
  },
});

// Create Document Component
const MyDocument = ({ data, events }) => {
  // console.log(eventDetails);
  console.log(data);
  const viewData = (event) => {
    var single = data.individualEvents.filter(
      (e) => e.eventName === event.data.name
    );
    var team = data.teamEvents.filter((e) => e.eventName === event.data.name);
    if (single.length > 0) {
      return single[0].eventFee;
    }
    if (team.length > 0) {
      return team[0].eventFee;
    } else {
      return "null";
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={Logo1} />
        </View>
        <View style={styles.info}>
          <Text style={{ marginBottom: 10 }}>Particpant Information</Text>
          <Text style={styles.infoHolder}>Name: {data.fullName}</Text>
          <Text style={styles.infoHolder}>Email: {data.email}</Text>
          <Text style={styles.infoHolder}>Phone No: {data.whatsappNumber}</Text>
          <Text style={styles.infoHolder}>
            College Name: {data.universityName}
          </Text>
        </View>
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
              Event Name
            </Text>
            <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "250px",
              }}
            >
              Contacts
            </Text>
            <Text
              style={{
                fontSize: 13,
                position: "absolute",
                top: "5px",
                left: "500px",
              }}
            >
              Fees
            </Text>
          </View>
          {events.map(
            (event, i) =>
              i < 13 && (
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
                    {i + 1}. {event.data.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      position: "absolute",
                      top: "5px",
                      left: "250px",
                    }}
                  >
                    {event.data.studentCoordinator[0].Name}-
                    {event.data.studentCoordinator[0].contact}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      position: "absolute",
                      top: "5px",
                      left: "500px",
                    }}
                  >
                    {viewData(event)}
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
          <Text style={{ fontSize: 10 }}>
            {
              "Amrita Vishwa Vidyapeetham\nChennai Campus,\n337/1A, Vengal Village,\nThiruvallur Taluk & District – 601 103.\nTamil Nadu, India\nPhone: 1 800 425 90009\nEmail: btech@amrita.edu"
            }
          </Text>
          <Image style={{ height: 70, width: 360 }} src={Logo} />
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
                Event Name
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "250px",
                }}
              >
                Contacts
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "500px",
                }}
              >
                Fees
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
                      {i + 1}. {event.data.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        position: "absolute",
                        top: "5px",
                        left: "250px",
                      }}
                    >
                      {event.data.studentCoordinator[0].Name}-
                      {event.data.studentCoordinator[0].contact}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        position: "absolute",
                        top: "5px",
                        left: "500px",
                      }}
                    >
                      {viewData(event)}
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
            <Text style={{ fontSize: 10 }}>
              {
                "Amrita Vishwa Vidyapeetham\nChennai Campus,\n337/1A, Vengal Village,\nThiruvallur Taluk & District – 601 103.\nTamil Nadu, India\nPhone: 1 800 425 90009\nEmail: btech@amrita.edu"
              }
            </Text>
            <Image style={{ height: 70, width: 360 }} src={Logo} />
          </View>
        </Page>
      )}
    </Document>
  );
};

export default MyDocument;
