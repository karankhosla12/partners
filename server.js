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

// API endpoint to handle FireCrawl LinkedIn
app.post('/linkedin', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const extractResult = await fireCrawlApp.extract([
            "https://help.linkedin.com"
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl LinkedIn:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message, 
            details: error.details || 'No additional details available.' 
        });
    }
});

// API endpoint to handle FireCrawl Salesforce
app.post('/salesforce', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const extractResult = await fireCrawlApp.extract([
            "https://help.salesforce.com/s",
            "https://help.linkedin.com"
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl Salesforce:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message, 
            details: error.details || 'No additional details available.' 
        });
    }
});

// API endpoint to handle FireCrawl Factors.ai
app.post('/factors', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const extractResult = await fireCrawlApp.extract([
            "https://help.factors.ai/en",
            "https://help.linkedin.com"
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl Factors.ai:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message, 
            details: error.details || 'No additional details available.' 
        });
    }
});

// API endpoint to handle FireCrawl Google Tag Manager
app.post('/tagmanager', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const extractResult = await fireCrawlApp.extract([
            "https://support.google.com/tagmanager/?hl=en",
            "https://help.linkedin.com"
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl Tag Manager:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message, 
            details: error.details || 'No additional details available.' 
        });
    }
});

// API endpoint to handle FireCrawl Zapier
app.post('/zapier', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const extractResult = await fireCrawlApp.extract([
            "https://help.zapier.com/hc/en-us",
            "https://help.linkedin.com"
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl Zapier:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message, 
            details: error.details || 'No additional details available.' 
        });
    }
});

// API endpoint to handle FireCrawl for all sites
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
            "https://linkedin.com/legal/privacy-policy"
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl Search:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message, 
            details: error.details || 'No additional details available.' 
        });
    }
});

// API endpoint to handle FireCrawl HubSpot
app.post('/hubspot', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const extractResult = await fireCrawlApp.extract([
            "https://help.hubspot.com",
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl HubSpot:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message, 
            details: error.details || 'No additional details available.' 
        });
    }
});

// API endpoint to handle FireCrawl Dynamics 365
app.post('/dynamics', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const extractResult = await fireCrawlApp.extract([
            "https://microsoft.com/en-us/dynamics-365/support",
            "https://help.linkedin.com"
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl Dynamics 365:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message, 
            details: error.details || 'No additional details available.' 
        });
    }
});

// API endpoint to handle FireCrawl Adobe Experience Platform
app.post('/adobe-platform', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const extractResult = await fireCrawlApp.extract([
            "https://experienceleague.adobe.com/en/docs/experience-platform/tags/home",
            "https://help.linkedin.com"
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl Adobe Experience Platform:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message, 
            details: error.details || 'No additional details available.' 
        });
    }
});

// API endpoint to handle FireCrawl Marketo Help Center
app.post('/marketo', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const extractResult = await fireCrawlApp.extract([
            "https://experienceleague.adobe.com/en/docs/marketo/using/getting-started/things-to-know/help-center",
            "https://help.linkedin.com"
        ], {
            prompt: prompt,
            enableWebSearch: true,
        });

        res.json(extractResult);
    } catch (error) {
        console.error('Error with FireCrawl Marketo:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message, 
            details: error.details || 'No additional details available.' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
