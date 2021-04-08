<?php


namespace App\Interfaces\Model\TaksInterface;

use App\Interfaces\Model\TaksInterface;

interface RepositoryInterface
{
    /**
     * @param TaksInterface $taks
     * @return TaksInterface
     */
    public function create(TaksInterface $taks): TaksInterface;

    /**
     * @param TaksInterface $taks
     * @return TaksInterface
     */
    public function update(TaksInterface $taks);

    /**
     * @param int $id
     * @return bool
     */
    public function delete(int $id): bool;

    /**
     * @return TaksInterface[]
     */
    public function list();
}
