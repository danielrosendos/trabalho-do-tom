<?php


namespace App\Http\Repository;

use App\Models\TaksModel;
use App\Interfaces\Model\TaksInterface;
use App\Interfaces\Model\TaksInterface\RepositoryInterface;


class Repository implements RepositoryInterface
{

    /**
     * @param TaksInterface $taks
     * @return TaksInterface
     */
    public function create(TaksInterface $taks): TaksInterface
    {
        try {
            $taks = TaksModel::create($taks->getData());
            return $taks;
        } catch (\Exception $e) {
            return $taks;
        }
    }

    /**
     * @param TaksInterface $taks
     * @return TaksInterface
     */
    public function update(TaksInterface $taks)
    {
        try {
            if(!TaksModel::find($taks->getId())) {
                throw new \Exception();
            }
            TaksModel::where('id', $taks->getId())->update($taks->getData());
            return TaksModel::find($taks->getId());
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * @param int $id
     * @return bool
     */
    public function delete(int $id): bool
    {
        try {
            if(!TaksModel::find($id)) {
                throw new \Exception();
            }
            TaksModel::where('id', $id)->delete();
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * @return TaksInterface[]|TaksModel[]|false|\Illuminate\Database\Eloquent\Collection
     */
    public function list()
    {
        try {
            if(!TaksModel::all()) {
                throw new \Exception();
            }

            return TaksModel::all();
        } catch (\Exception $e) {
            return false;
        }
    }
}
