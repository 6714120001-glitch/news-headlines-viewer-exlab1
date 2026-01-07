document.getElementById('fetch-btn').addEventListener('click', fetchHeadlines);

async function fetchHeadlines() {
    const container = document.getElementById('news-container');
    const loader = document.getElementById('loader');

    container.innerHTML = '';
    loader.classList.remove('hidden');

    // --- จุดที่ 1: เพิ่ม ,thumbnail เข้าไปใน URL ---
    const url = 'https://content.guardianapis.com/search?page-size=5&show-fields=trailText,thumbnail&api-key=test';

    try {
        const response = await fetch(url);
        const data = await response.json();
        const newsArray = data.response.results;

        newsArray.forEach(news => {
            const li = document.createElement('li');
            li.className = 'news-item';

            const publishedDate = new Date(news.webPublicationDate).toLocaleDateString('th-TH', {
                day: '2-digit', month: 'short', year: 'numeric'
            });

            // --- จุดที่ 2: ปรับโครงสร้างใหม่ให้มี class 'news-content' และแท็ก <img> ---
            li.innerHTML = `
                <div class="news-content">
                    ${news.fields?.thumbnail ? `<img src="${news.fields.thumbnail}" class="news-img" alt="news">` : ''}
                    <div class="news-text">
                        <div class="news-title">
                            <a href="${news.webUrl}" target="_blank" class="news-link">
                                ${news.webTitle}
                            </a>
                        </div>
                        <div class="news-desc">${news.fields.trailText || 'ไม่มีรายละเอียด'}</div>
                        <div class="news-meta">📍 ${news.sectionName} | 📅 ${publishedDate}</div>
                    </div>
                </div>
            `;

            container.appendChild(li);
        });
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error);
        container.innerHTML = `<p style="color:red">ไม่สามารถโหลดข่าวได้ โปรดลองอีกครั้ง</p>`;
    } finally {
        loader.classList.add('hidden');
    }
}