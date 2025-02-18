import express from 'express';
import FireCrawlApp from '@mendable/firecrawl-js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// FireCrawl setup
const fireCrawlApp = new FireCrawlApp({ apiKey: "fc-22e38bcac96f4d27b6fb407519b9cf39" });

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// API endpoint to handle FireCrawl searches
app.post('/search', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const extractResult = await fireCrawlApp.extract([
            "https://help.linkedin.com",
            "https://help.salesforce.com/s",
            "https://help.factors.ai/en",
            "https://support.google.com/tagmanager/?hl=en",
            "https://help.zapier.com/hc/en-us",
            "https://help.hubspot.com",
            "https://microsoft.com/en-us/dynamics-365/support",
            "https://experienceleague.adobe.com/en/docs/experience-platform/tags/home",
            "https://linkedin.com/legal/privacy-policy",
            "https://experienceleague.adobe.com/en/docs/marketo/using/getting-started/things-to-know/help-center"
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
