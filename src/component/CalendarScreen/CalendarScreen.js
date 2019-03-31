import React, {Component} from "react";
import {StyleSheet, Dimensions} from "react-native";
import {Headers} from "../common";
import {
    Container,
    Text,
    Content,
    View,
} from "native-base";
import {Agenda, calendarTheme} from 'react-native-calendars';

let {height} = Dimensions.get("window");

class CalendarScreen extends Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }

    render() {
        return (
            <Container style={{
                height: height - 150,
            }}>
                <Headers routes={this.props.navigation}/>
                <View style={{marginLeft: 20}}>
                    <Text style={{
                        fontFamily: 'Poppins_bold',
                        mariginLeft: 10,
                        marginTop: 10,
                        fontSize: 28
                    }}>Planner</Text>
                </View>
                <Agenda
                    items={this.state.items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    selected={'2018-12-29'}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    markingType={'period'}
                    markedDates={{
                        '2018-12-29': {textColor: '#666'},
                        '2018-12-30': {textColor: '#666'},
                        '2018-12-31': {startingDay: true, endingDay: true, color: '#17D9D1'},
                        '2019-01-01': {startingDay: true, color: '#17D9D1'},
                        '2019-01-02': {endingDay: true, color: 'red'},
                        '2019-01-06': {startingDay: true, color: 'gray'},
                        '2019-01-03': {color: 'gray'},
                        '2019-01-09': {endingDay: true, color: 'gray'}
                    }}
                    monthFormat={'yyyy'}
                    theme={{calendarBackground: 'white', agendaKnobColor: '#17D9D1'}}
                    renderDay={(day, item) => (<Text>{day ? day.day : 'item'}</Text>)}
                />
            </Container>
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {
                newItems[key] = this.state.items[key];
            });
            this.setState({
                items: newItems
            });
            console.log(newItems);
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});
export default CalendarScreen;
