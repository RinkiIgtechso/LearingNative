import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";


export default function PullRefresh(){
    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [isPosting, setIsPosting] = useState(false);

    const fetchData = async (limit = 10) => {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
          );
          const data = await response.json();
          setPostList(data);
          setIsLoading(false);
          setError("");
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
          setError("Failed to fetch post list.");
        }
    };

    const addPost = async () =>{
        setIsPosting(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title, 
                    body: postBody
                })
            });
    
            const newPost = await response.json();
            setPostList([newPost, ...postList]);
            setTitle('');
            setPostBody('');
            setIsPosting(false);
        } catch (error) {
            setError(true);
            
        }
        
    }

    useEffect(() => {
        fetchData();
      }, []);
    
      const handleRefresh = () => {
        setRefreshing(true);
        fetchData(20);
        setRefreshing(false);
      };

    if (isLoading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </SafeAreaView>   
        );
    }

    return (
        <SafeAreaView style={styles.listContainer}>
            <View style={styles.inputContainer} >
                <TextInput
                    style={styles.input}
                    placeholder="Enter post title"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter post body"
                    value={postBody}
                    onChangeText={setPostBody}
                />
                <Button title={isPosting ? "Adding..." : "Add text"} onPress={addPost} disabled={isPosting} />
            </View>
            <View>
                <FlatList
                data={postList}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                    <Text style={styles.nameText}>{item.title}</Text>
                    <Text style={styles.typeText}>{item.body}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                ListEmptyComponent={<Text>No Posts Found</Text>}
                ListHeaderComponent={
                    <Text style={styles.headerText}>Post List</Text>
                }
                ListFooterComponent={
                    <Text style={styles.footerText}>End of list</Text>
                }
                refreshing={refreshing}
                onRefresh={handleRefresh}
                />
            </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
      paddingTop: StatusBar.currentHeight,
    },
    loadingContainer: {
      flex: 1,
      backgroundColor: "#F5F5F5",
      paddingTop: StatusBar.currentHeight,
      justifyContent: "center", // Center the loading spinner
      alignItems: "center", // Center the loading spinner
    },
    listContainer: {
      flex: 1,
      paddingHorizontal: 16,
      marginTop:30
    },
    card: {
      backgroundColor: "#FFFFFF",
      padding: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
    nameText: {
      fontSize: 30,
    },
    typeText: {
      fontSize: 24,
      color: "#666666",
    },
    headerText: {
      fontSize: 24,
      textAlign: "center",
      marginBottom: 12,
    },
    footerText: {
      fontSize: 24,
      textAlign: "center",
      marginTop: 12,
    },
    inputContainer: {
      backgroundColor: "#FFFFFF",
      padding: 16,
      borderRadius: 8,
      borderWidth: 1,
      margin: 16,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 8,
      padding: 8,
      borderRadius: 8,
    },
    errorContainer: {
      backgroundColor: "#FFC0CB",
      padding: 16,
      borderRadius: 8,
      borderWidth: 1,
      margin: 16,
      alignItems: "center",
    },
    errorText: {
      color: "#D8000C",
      fontSize: 16,
      textAlign: "center",
    },
  });