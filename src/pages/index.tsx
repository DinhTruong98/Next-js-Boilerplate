import { Card } from 'ui-neumorphism';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="PLBN - the core technology of East Lao"
          description="plbn - phân lô bán nền là một tựa game metaverse trên blockchain, nơi các bạn có thể mua những mảnh đất ảo, đầu tư xây dựng cơ sở hạ tầng hoặc trồng trọt để kiếm lời."
        />
      }
    >
      <section title="phan lo ban nen la gi">
        <div className="md:w-2/3 w-full">
          <Card className="p-4">
            <h2 className="text-4xl font-black">
              PLBN - Phân lô bán nền là gì?
            </h2>
            <p className="text-2xl font-extralight">
              Phân lô bán nền là tựa game dựa trên 1 công nghệ có thật tại nước
              East Lao
            </p>
            <img src="/assets/images/plbn.jpeg" alt="Phân lô bán nền là gì?" />
          </Card>
        </div>
      </section>
      <section title="phan lo ban nen la gi" className="flex justify-end mt-6">
        <div className="md:w-2/3 w-full">
          <Card className="p-4">
            <h2 className="text-4xl font-black">
              PLBN - Phân lô bán nền là gì?
            </h2>
            <p className="text-2xl font-extralight">
              Phân lô bán nền là tựa game dựa trên 1 công nghệ có thật tại nước
              East Lao
            </p>
            <img src="/assets/images/plbn.jpeg" alt="" />
          </Card>
        </div>
      </section>
    </Main>
  );
};

export default Index;
