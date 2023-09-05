

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Modal, ScrollView } from 'react-native';
import AstraArt from './assets/AstraArt.jpg';
import styles from './styles';

const App = () => {
  const [showHiddenText, setShowHiddenText] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cardData, setCardData] = useState({
    name: '',
    number: '',
    img: '',
    meaning: '',
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const toggleHiddenText = () => {
    setShowHiddenText(!showHiddenText);
  };

  const toggleDropdown = () => {
    console.log("dropdown button pressed")
    setShowDropdown(!showDropdown);
    setIsModalVisible(!isModalVisible);
  };

  const resetToAstraArt = () => {
    setCardData({
      name: '',
      number: '',
      img: AstraArt, // Reset the image to AstraArt
      meaning: '',
    });
  };

  const apiCardRequest = async (card) => {
    try {
      const response = await fetch(`https://oracle-api.up.railway.app/api/${card}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCardData(data);
      setShowModal(false);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  const randomCardRequest = async () => {
    try {
      const response = await fetch('https://oracle-api.up.railway.app/api/random');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCardData(data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };


  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.container}> */}
        <Text style={styles.title}>Oracle Card Reading</Text>
        {/* Hidden text section */}
        <View style={styles.hiddenTextContainer}>
          <Text style={styles.hiddenText}>
            "Meet Agnes. Agnes, like so many Healers, has been on quite a journey - for several lifetimes.
                A journey of trauma, despair, loneliness.
                Of self-teaching, inner work. Growth...."
          </Text>
          {!showHiddenText && (
            <TouchableOpacity onPress={toggleHiddenText}>
              <Text style={styles.hiddenTextButton}>See More</Text>
            </TouchableOpacity>
          )}
          {showHiddenText && (
            <View>
              <Text style={styles.hiddenText}>
                "...Of mowing everything to the ground
                and starting anew - the phoenix from the ashes.
                A journey of cautious (at first) self-love.
                Of believing in her gifts - even when no one else did (or could).
                Of coming into her power as the Massively Magical Healer-Shaman-Witch that is her True Essence.
                Agnes has a story to share with you.
                A healing story.
                She thinks you will resonate with it. Hunger for it, even.
                She feels that - once you hear it - you will KNOW it.
                And you'll be set free - free to BE YOU - once and for all.
                For, Beloved Healer, it's your story, too.""
              </Text>
              <TouchableOpacity onPress={toggleHiddenText}>
                <Text style={styles.hiddenTextButton}>See Less</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
              {/* Reset Button */}
      <View style={styles.resetButtonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={resetToAstraArt}>
          <Text style={styles.resetButtonText}>Reset Deck</Text>
        </TouchableOpacity>
      </View>

        {/* Dropdown */}



      {/* Card Lookup Button */}
      <View style={styles.dropdownButtonContainer}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleModal}>
        <Text style={styles.dropdownButtonText}>Card Lookup</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
        >
          <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
     <View style={styles.modalContainer}>
        <ScrollView style={styles.modalScroll}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                apiCardRequest('card1');
              }}
            >
              <Text>Card 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => apiCardRequest('card1Reversed')}
            >
              <Text>Card 1 Reversed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card2')}>
        <Text>Card 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card2Reversed')}>
        <Text>Card 2 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card3')}>
        <Text>Card 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card3Reversed')}>
        <Text>Card 3 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card4')}>
        <Text>Card 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card4Reversed')}>
        <Text>Card 4 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card5')}>
        <Text>Card 5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card5Reversed')}>
        <Text>Card 5 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card6')}>
        <Text>Card 6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card6Reversed')}>
        <Text>Card 6 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card7')}>
        <Text>Card 7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card7Reversed')}>
        <Text>Card 7 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card8')}>
        <Text>Card 8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card8Reversed')}>
        <Text>Card 8 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card9')}>
        <Text>Card 9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card9Reversed')}>
        <Text>Card 9 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card10')}>
        <Text>Card 10</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card10Reversed')}>
        <Text>Card 10 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card11')}>
        <Text>Card 11</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card11Reversed')}>
        <Text>Card 11 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card12')}>
        <Text>Card 12</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card12Reversed')}>
        <Text>Card 12 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card13')}>
        <Text>Card 13</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card13Reversed')}>
        <Text>Card 13 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card14')}>
        <Text>Card 14</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card14Reversed')}>
        <Text>Card 14 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card15')}>
        <Text>Card 15</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card15Reversed')}>
        <Text>Card 15 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card16')}>
        <Text>Card 16</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card16Reversed')}>
        <Text>Card 16 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card17')}>
        <Text>Card 17</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card17Reversed')}>
        <Text>Card 17 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card18')}>
        <Text>Card 18</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card18Reversed')}>
        <Text>Card 18 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card19')}>
        <Text>Card 19</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card19Reversed')}>
        <Text>Card 19 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card20')}>
        <Text>Card 20</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card20Reversed')}>
        <Text>Card 20 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card21')}>
        <Text>Card 21</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card21Reversed')}>
        <Text>Card 21 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card22')}>
        <Text>Card 22</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card22Reversed')}>
        <Text>Card 22 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card23')}>
        <Text>Card 23</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card23Reversed')}>
        <Text>Card 23 Reversed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card24')}>
        <Text>Card 24</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownItem} onPress={() => apiCardRequest('card24Reversed')}>
        <Text>Card 24 Reversed</Text>
      </TouchableOpacity>

            {/* Add more card options here */}
          </View>
        </ScrollView>
        </View>
        </TouchableWithoutFeedback>
        </Modal>
        </View>


        {/* Random Card Button */}
        <View style={styles.randomButtonContainer}>
          <TouchableOpacity style={styles.randomButton} onPress={randomCardRequest}>
            <Text style={styles.randomButtonText}>One Card Reading</Text>
          </TouchableOpacity>
        </View>

        {/* Card data section */}
       {/* Card data section */}
    {cardData.name ? ( // Render if there's a name or image
      <View style={styles.cardDataContainer}>
        <Text style={styles.cardTitle}>Name: {cardData.name}</Text>
        <Text style={styles.cardNumber}>Number: {cardData.number}</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: cardData.img }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        {cardData.meaning && (
          <View style={styles.ps}>
            <Text style={styles.meaningTitle}>Meaning:</Text>
            <Text style={styles.meaningText}>{cardData.meaning}</Text>
          </View>
        )}
      </View>
    ) : (
      <View style={styles.imageContainer}>
        <Image
          source={AstraArt}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    )}

        {/* Original Watercolor Artwork */}
        <Text style={styles.creditText}>
          Website and Original Watercolor Artwork by{' '}
          <Text style={styles.creditLink}>Rachel Eckenrod</Text>
        </Text>

        {/* Words, Meanings, and Original Cover Artwork */}
        <Text style={styles.creditText}>
          Words, Meanings, and Original Cover Artwork by{' '}
          <Text style={styles.creditLink}>Astra</Text>
        </Text>
      </ScrollView>
    // </TouchableWithoutFeedback>
  );
};

export default App;
