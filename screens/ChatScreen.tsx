// screens/ChatScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'seller';
  timestamp: Date;
}

interface ChatScreenProps {
  route: any;
  navigation: any;
}

export default function ChatScreen({ route }: ChatScreenProps) {
  const { product } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hi! I'm interested in your ${product.title}. Is it still available?`,
      sender: 'user',
      timestamp: new Date(),
    },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message.trim(),
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, newMessage]);
      setMessage('');

      // Simulate seller response
      setTimeout(() => {
        const sellerResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "Yes, it's still available! Would you like to schedule a viewing?",
          sender: 'seller',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, sellerResponse]);
      }, 1000);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === 'user';

    return (
      <View
        className={`max-w-[80%] mb-3 px-3 py-2 rounded-2xl ${
          isUser
            ? 'self-end bg-indigo-600'
            : 'self-start bg-white border border-gray-200'
        }`}
      >
        <Text
          className={`text-base leading-5 ${
            isUser ? 'text-white' : 'text-gray-900'
          }`}
        >
          {item.text}
        </Text>
        <Text className="text-xs text-gray-400 mt-1 self-end">
          {item.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Product Info Header */}
        <View className="bg-white px-4 py-3 border-b border-gray-200">
          <Text className="text-base font-semibold text-gray-900 mb-1" numberOfLines={1}>
            {product.title}
          </Text>
          <Text className="text-sm font-bold text-emerald-600">
            ₦{product.price.amount.toLocaleString()}
          </Text>
        </View>

        {/* Messages */}
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          className="flex-1"
          contentContainerClassName="p-4"
        />

        {/* Message Input */}
        <View className="flex-row items-end px-4 py-3 bg-white border-t border-gray-200">
          <TextInput
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-2 max-h-24 text-base"
            placeholder="Type your message..."
            value={message}
            onChangeText={setMessage}
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            className={`w-10 h-10 rounded-full items-center justify-center ${
              message.trim() ? 'bg-indigo-600' : 'bg-gray-100'
            }`}
            onPress={sendMessage}
            disabled={!message.trim()}
          >
            <MaterialIcons
              name="send"
              size={20}
              color={message.trim() ? '#FFFFFF' : '#9CA3AF'}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
