import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import 'package:provider/provider.dart';
import 'package:cached_network_image/cached_network_image.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => MyAppState(),
      child: MaterialApp(
        title: 'Portfolio page!',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        ),
        home: const MyHomePage(),
      ),
    );
  }
}

class MyAppState extends ChangeNotifier {
  var current = WordPair.random();

  //Image Generator
  String get imageUrl {
    final url =
        'https://picsum.photos/400/300?random=${DateTime.now().millisecondsSinceEpoch}';
    print('🖼️ Trying to load image: $url'); // <-- Add this line
    return url;
  }

  //Text Generator
  void getNext() {
    current = WordPair.random();
    notifyListeners();
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    var appState = context.watch<MyAppState>();

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Portfolio page!'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text("A random idea:"),
            const Text("It's tobarok:"),
            const Text("An awesome idea!"),
            const Text(MyAppState.current.asLowerCase),
            
            ElevatedButton(
              onPressed: () {
                print('button pressed!');
                print("object");
              },
              child: Text('Next'),
            ),
            ElevatedButton(
              onPressed: () {
                print('Button backed');
                print('Sorry!');
              },
              child: Text('Back'),
            ),
            const SizedBox(
              height: 16,
            ), // Adds some space between text and image

            SizedBox(
              width: 300,
              height: 225,
              child: Card(
                elevation: 4, // Gives it a nice shadow
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12), // Rounded corners
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(12),
                  child: CachedNetworkImage(
                    imageUrl: appState.imageUrl,
                    fit: BoxFit.cover,
                    // Shows a loading spinner while the image downloads
                    placeholder: (context, url) =>
                        const Center(child: CircularProgressIndicator()),
                    // Shows an icon if the image fails to load (e.g., no internet)
                    errorWidget: (context, url, error) => const Center(
                      child: Icon(
                        Icons.broken_image,
                        size: 50,
                        color: Colors.grey,
                      ),
                    ),
                  ),
                ),
              ),
            ),

            const SizedBox(height: 24), // Space between image and text

            Text(
              appState.current.asLowerCase.toUpperCase(),
              style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                fontWeight: FontWeight.bold,
                color: Theme.of(context).colorScheme.primary,
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          context.read<MyAppState>().getNext();
        },
        tooltip: 'Next Idea',
        child: const Icon(Icons.refresh),
      ),
    );
  }
}
