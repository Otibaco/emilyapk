import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { theme } from '../../styles/theme';

interface MessageItemProps {
  chat: {
    user: {
      name: string;
      avatar: string;
      online: boolean;
    };
    lastMessage: {
      text: string;
      time: string;
      unread: boolean;
    };
  };
}

const MessageItem: React.FC<MessageItemProps> = ({ chat }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: chat.user.avatar }} style={styles.avatar} />
        {chat.user.online && <View style={styles.onlineIndicator} />}
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{chat.user.name}</Text>
          <Text style={styles.time}>{chat.lastMessage.time}</Text>
        </View>
        
        <View style={styles.messageContainer}>
          <Text 
            style={[
              styles.message, 
              chat.lastMessage.unread && styles.unreadMessage
            ]}
            numberOfLines={1}
          >
            {chat.lastMessage.text}
          </Text>
          
          {chat.lastMessage.unread && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadCount}>1</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.divider,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: theme.spacing.md,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    borderWidth: 2,
    borderColor: theme.colors.surface,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  name: {
    fontWeight: '600',
    color: theme.colors.text,
  },
  time: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  message: {
    flex: 1,
    color: theme.colors.textSecondary,
  },
  unreadMessage: {
    fontWeight: '600',
    color: theme.colors.text,
  },
  unreadBadge: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.sm,
  },
  unreadCount: {
    color: theme.colors.surface,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default MessageItem;