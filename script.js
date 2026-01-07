document.getElementById('fetch-btn').addEventListener('click', fetchHeadlines);

function getBadgeClass(section) {
    const s = section.toLowerCase();
    if (s.includes('sport')) return 'bg-sport';
    if (s.includes('environment')) return 'bg-environment';
    if (s.includes('politics')) return 'bg-politics';
    return 'bg-default';
}

async function fetchHeadlines() {
    const container = document.getElementById('news-container');
    const loader = document.getElementById('loader');

    container.innerHTML = '';
    loader.classList.remove('hidden');

    const url = 'https://content.guardianapis.com/search?page-size=5&show-fields=trailText,thumbnail&api-key=test';

    try {
        const response = await fetch(url);
        const data = await response.json();
        const newsArray = data.response.results;

        newsArray.forEach(news => {
            const li = document.createElement('li');
            li.className = 'news-item';

            const badgeClass = getBadgeClass(news.sectionName);
            const publishedDate = new Date(news.webPublicationDate).toLocaleDateString('th-TH', {
                day: '2-digit', month: 'short', year: 'numeric'
            });

            li.innerHTML = `
                <div class="news-content">
                    ${news.fields?.thumbnail ? `<img src="${news.fields.thumbnail}" class="news-img" alt="news">` : ''}
                    <div class="news-text">
                        <span class="badge ${badgeClass}">${news.sectionName}</span>
                        <div class="news-title">
                            <a href="${news.webUrl}" target="_blank" class="news-link">
                                ${news.webTitle}
                            </a>
                        </div>
                        <div class="news-desc">${news.fields.trailText || 'ไม่มีรายละเอียด'}</div>
                        <div class="news-meta">📅 วันที่: ${publishedDate}</div>
                    </div>
                </div>
            `;

            container.appendChild(li);
        });
    } catch (error) {
        console.error("Error:", error);
        container.innerHTML = `<p style="color:red">ไม่สามารถโหลดข่าวได้ โปรดลองอีกครั้ง</p>`;
    } finally {
        loader.classList.add('hidden');
    }
}