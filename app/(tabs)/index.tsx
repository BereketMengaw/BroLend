import { Image } from 'expo-image';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <ThemedView style={styles.header}>
        <View style={styles.headerLeft}>
          <ThemedText style={styles.appTitle}>BroLend</ThemedText>
          <ThemedText style={styles.headerSubtitle}>Welcome back!</ThemedText>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.profileImage}>
            <Ionicons name="person" size={24} color="#007AFF" />
          </View>
          <View style={styles.notificationBadge}>
            <ThemedText style={styles.notificationText}>2</ThemedText>
          </View>
        </TouchableOpacity>
      </ThemedView>

      {/* Balance Card */}
      <ThemedView style={styles.balanceCard}>
        <ThemedText style={styles.balanceLabel}>Total Balance</ThemedText>
        <ThemedText style={styles.balanceAmount}>$2,500.00</ThemedText>
        <View style={styles.balanceStats}>
          <View style={styles.statItem}>
            <ThemedText style={styles.statLabel}>Lent</ThemedText>
            <ThemedText style={styles.statValue}>$1,200.00</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText style={styles.statLabel}>Borrowed</ThemedText>
            <ThemedText style={styles.statValue}>$800.00</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Quick Actions */}
      <ThemedView style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <ThemedView style={styles.actionIcon}>
            <Ionicons name="add-circle-outline" size={24} color="#007AFF" />
          </ThemedView>
          <ThemedText style={styles.actionText}>Lend</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <ThemedView style={styles.actionIcon}>
            <Ionicons name="remove-circle-outline" size={24} color="#007AFF" />
          </ThemedView>
          <ThemedText style={styles.actionText}>Borrow</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <ThemedView style={styles.actionIcon}>
            <Ionicons name="swap-horizontal-outline" size={24} color="#007AFF" />
          </ThemedView>
          <ThemedText style={styles.actionText}>Transfer</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Recent Transactions */}
      <ThemedView style={styles.transactionsContainer}>
        <ThemedText style={styles.sectionTitle}>Recent Transactions</ThemedText>
        <ThemedView style={styles.transactionItem}>
          <ThemedView style={styles.transactionIcon}>
            <Ionicons name="arrow-down" size={20} color="#4CAF50" />
          </ThemedView>
          <ThemedView style={styles.transactionInfo}>
            <ThemedText style={styles.transactionTitle}>Received from John</ThemedText>
            <ThemedText style={styles.transactionDate}>Today, 2:30 PM</ThemedText>
          </ThemedView>
          <ThemedText style={styles.transactionAmount}>+$150.00</ThemedText>
        </ThemedView>
        <ThemedView style={styles.transactionItem}>
          <ThemedView style={styles.transactionIcon}>
            <Ionicons name="arrow-up" size={20} color="#FF3B30" />
          </ThemedView>
          <ThemedView style={styles.transactionInfo}>
            <ThemedText style={styles.transactionTitle}>Sent to Sarah</ThemedText>
            <ThemedText style={styles.transactionDate}>Yesterday, 4:15 PM</ThemedText>
          </ThemedView>
          <ThemedText style={[styles.transactionAmount, styles.negativeAmount]}>-$75.00</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerLeft: {
    flex: 1,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  notificationBadge: {
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  notificationText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  balanceCard: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#007AFF',
    marginBottom: 24,
  },
  balanceLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
  },
  balanceStats: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  transactionsContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionDate: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4CAF50',
  },
  negativeAmount: {
    color: '#FF3B30',
  },
});
